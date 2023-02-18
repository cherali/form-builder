import Access, { withAccess } from 'components/Access/Access'
import { AppGrid } from 'components/basics/AppGrid'
import { AppTabs } from 'components/basics/AppTabs'
import { FieldSection } from 'components/FieldSection'
import { FormSettings } from 'components/FormSettings'
import { InputSection } from 'components/InputSection'
import { PreviewSection } from 'components/PreviewSection'
import { useUserRole } from 'hooks/useUserRole'


function App() {
  const { canRead, canModifyFormSettings } = useUserRole()

  const tabs = [
    { label: 'Fields', component: FieldSection },
    { label: 'Form Settings', component: withAccess(FormSettings, canModifyFormSettings) },
  ]

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
        <Access checkAccess={canRead}>
          <AppTabs
            orientation='horizontal'
            indicatorColor='secondary'
            textColor='secondary'
            tabs={tabs}
            variant='scrollable'
          />
        </Access>
      </AppGrid>

      <AppGrid flex={1}>
        <Access checkAccess={canRead} renderBlank>
          <InputSection />
        </Access>
      </AppGrid>

      <AppGrid flex={1}>
        <Access checkAccess={canRead} renderBlank>
          <PreviewSection />
        </Access>
      </AppGrid>
    </AppGrid>
  )
}

export default App
