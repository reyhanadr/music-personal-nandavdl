import { columns, Songs } from "./column"
import { DataTable } from "./data-table"
import { createClient } from '@/utils/supabase/server'

async function getData(): Promise<Songs[]> {
    console.log('Creating Supabase client...')
    const supabase = await createClient()
    console.log('Supabase client created')

    // Add these debug logs
    const { data: { session } } = await supabase.auth.getSession()
    console.log('Session:', session)
    console.log('Supabase URL:', process.env.NEXT_PUBLIC_SUPABASE_URL)

    try {
      console.log('Fetching songs...')
      const { data, error, status, count } = await supabase
        .from('songs')
        .select('*')

      console.log('Query results:', { data, error, status, count })

      if (error) {
        console.error('Supabase error:', { error, status })
        if (status !== 406) {
          throw error
        }
      }
  
      if (!data || data.length === 0) {
        console.warn('No songs found or empty response')
        return []
      }
  
      console.log(`Found ${data.length} songs`)
      return data.map(song => ({
        id: song.id,
        playlist_id: song.playlist_id,
        title: song.title || 'Untitled',
        link: song.link || '#',
        artist: song.artist || 'Unknown Artist',
        created_at: song.created_at || new Date().toISOString()
      }))
    } catch (error) {
      console.error('Error in getData:', error)
      return []
    }
  }

export default async function SongsPage() {
  const data = await getData()

  return (
    <div className="container mx-auto py-10">
      <DataTable columns={columns} data={data} />
    </div>
  )
}