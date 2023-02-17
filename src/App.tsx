import { AppGrid } from 'components/basics/AppGrid'
import { FieldSection } from 'components/FieldSection'
import { InputSection } from 'components/InputSection'
import { PreviewSection } from 'components/PreviewSection'


function App() {
  return (
    <AppGrid
      container
      display='flex'
      justifyContent='space-between'
      flexWrap='wrap'
      height='100vh'
      overflow='hidden'
      gap={16}
      px={16}
    >
      <AppGrid flex={1}>
        <FieldSection />
      </AppGrid>

      <AppGrid flex={1}>
        <InputSection />
      </AppGrid>

      <AppGrid flex={1}>
        <PreviewSection />
      </AppGrid>
    </AppGrid>
  )
}

export default App
