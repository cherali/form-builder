import { useState, FC } from 'react'
import { v4 as uuidv4 } from 'uuid'
import ReactGridLayout from 'react-grid-layout'
import { Tooltip } from '@mui/material'
import { useFormProvider } from 'providers/FormProvider/useFormProvider'
import { AppConfirmation } from 'components/basics/AppConfirmation'
import { AppButton } from 'components/basics/AppButton'
import { AppGrid } from 'components/basics/AppGrid'
import { AppText } from 'components/basics/AppText'
import AddIcon from '@mui/icons-material/Add'
import MoreVertIcon from '@mui/icons-material/MoreVert'
import { AppTextDescription } from 'components/basics/AppTextDescription'
import { useUserRole } from 'hooks/useUserRole'
import { StyledFieldSection } from './FieldSection.styles'
import type { Confirmation, FieldSectionProps } from './index.d'


const placeholderTextMaxLengthShow = 20

const FieldSection: FC<FieldSectionProps> = () => {
	const { form, clearForm, setSelectedItem, setForm, mappedFormData, selectedItem, prepareCreate } = useFormProvider()
	const { canCreate, canDelete, canUpdate } = useUserRole()
	const [confirmed, setConfirmed] = useState<Confirmation>({ id: '', open: false })

	const handleClear = () => {
		clearForm()
	}

	const handleAddNewField = () => {
		prepareCreate()
		setSelectedItem({
			id: uuidv4(),
			type: 'text',
			name: '',
			placeholder: ''
		})
	}

	const onDragStop = (layout: Array<ReactGridLayout.Layout>) => {
		const sortedIds = layout.sort((a, b) => a.y - b.y).sort((a, b) => a.x - b.x).map(item => item.i)

		const sortedData: FormFieldProps[] = []

		sortedIds.forEach((id) => {
			sortedData.push(mappedFormData[id])
		})

		setForm(sortedData)
	}


	const handleEditField = (field: FormFieldProps) => () => {
		if (selectedItem?.id === field.id) {
			setSelectedItem(undefined)
		} else {
			setSelectedItem(field)
		}
	}


	const handleDeleteField = () => {
		setConfirmed({ id: '', open: false })
		setSelectedItem(undefined)
		setForm(form.filter(r => r.id !== confirmed.id))
	}

	const handleDeleteClick = (id: string) => () => {
		setConfirmed({ open: true, id })
	}

	const handleOpen = () => {
		setConfirmed(s => ({ open: false, id: s.id }))
	}

	return (
		<StyledFieldSection>
			<AppGrid gap={4} display='flex' justifyContent='flex-end' marginTop={8}>
				{canCreate() && <AppButton color='primary' startIcon={<AddIcon />} onClick={handleAddNewField}>Add New Field</AppButton>}
				{canDelete() && <AppButton color='error' variant='outlined' onClick={handleClear}>Clear All</AppButton>}
			</AppGrid>

			<AppGrid mx={4}>
				<AppTextDescription color='Highlight' variant='body2'>You can drag item to change sort.</AppTextDescription>
			</AppGrid>
			<AppGrid marginTop={8} overflow='auto' height='80vh'>
				{form.length === 0 && <AppText>Form empty</AppText>}
				{form.length > 0 && <ReactGridLayout
					cols={1}
					rowHeight={35}
					width={window.innerWidth / 3.3}
					isResizable={false}
					autoSize
					isBounded
					allowOverlap={false}
					margin={[4, 8]}
					isDraggable={canUpdate()}
					onDragStop={onDragStop}
					draggableHandle='.drag'
				>
					{form.map(item => (
						<AppGrid
							key={item.id}
							display='flex'
							alignItems='center'
							padding={2}
							gap={4}
							bgcolor={selectedItem?.id === item.id ? 'lightcyan' : 'unset'}
							data-grid={{ x: 0, y: Infinity, w: 1, h: 1.4 }}
						>
							<Tooltip title='move field'>
								<MoreVertIcon className='drag' />
							</Tooltip>
							<AppGrid flex={1} display='flex' justifyContent='space-between' alignItems='center'>
								<AppGrid display='flex' gap={4} alignItems='flex-end'>
									<AppText>{item.name}</AppText>
									<AppText color='darkgreen' variant='caption'>{item.placeholder?.slice(0, placeholderTextMaxLengthShow)}{Boolean((item.placeholder?.length || 0) > placeholderTextMaxLengthShow) && <> ...</>}</AppText>
								</AppGrid>

								<AppGrid display='flex' gap={4}>
									{canUpdate() && <AppButton color={selectedItem?.id === item.id ? 'warning' : 'info'} variant='outlined' onClick={handleEditField(item)}>{item.id === selectedItem?.id ? 'Cancel Edit' : 'Edit'}</AppButton>}
									{canDelete() && <AppButton color='error' onClick={handleDeleteClick(item.id)} >Delete</AppButton>}
								</AppGrid>
							</AppGrid>
						</AppGrid>
					))}
				</ReactGridLayout>}
			</AppGrid>

			<AppConfirmation
				handleOpen={handleOpen}
				onConfirmed={handleDeleteField}
				open={confirmed.open}
				msg='Are you sure want to delete this field?'
				type='delete'
			/>
		</StyledFieldSection>
	)
}

export default FieldSection
