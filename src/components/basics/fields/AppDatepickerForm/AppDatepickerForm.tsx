import { useState, useEffect, useRef, useMemo, FC, MouseEvent } from 'react'
import {
	CustomDatePicker,
	DatePickerLocale,
	createDate,
} from 'headless-custom-datepicker'
import { formatDate } from 'headless-custom-datepicker/dist/utils/dateUtils'
import { useFormContext } from 'react-hook-form'
import { AppIconButton } from 'components/basics/AppIconButton'
import { AppText } from 'components/basics/AppText'
import { AppGrid } from 'components/basics/AppGrid'
import { AppPopover } from 'components/basics/AppPopover'
import { AppButton } from 'components/basics/AppButton'
import { AppTextFormField } from '../AppTextFormField'
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft'
import ChevronRightIcon from '@mui/icons-material/ChevronRight'
import ArrowBackIcon from '@mui/icons-material/ArrowBack'
import CalendarTodayIcon from '@mui/icons-material/CalendarToday'
import type { AppDatepickerFormProps } from './index.d'


const datepickerHeight = 250

const enLocale: DatePickerLocale = (year: number) => ({
	months: {
		1: { name: 'January', numberOfDays: 31 },
		2: { name: 'February', numberOfDays: year % 4 === 0 ? 29 : 28 },
		3: { name: 'March', numberOfDays: 31 },
		4: { name: 'April', numberOfDays: 30 },
		5: { name: 'May', numberOfDays: 31 },
		6: { name: 'June', numberOfDays: 30 },
		7: { name: 'July', numberOfDays: 31 },
		8: { name: 'August', numberOfDays: 31 },
		9: { name: 'September', numberOfDays: 30 },
		10: { name: 'October', numberOfDays: 31 },
		11: { name: 'November', numberOfDays: 30 },
		12: { name: 'December', numberOfDays: 31 },
	}
})

const weeksTitle = [
	'Sun',
	'Mon',
	'Tue',
	'Wed',
	'Thu',
	'Fri',
	'Sat',
]


const AppDatepickerForm: FC<AppDatepickerFormProps> = ({ name, placeholder, defaultValue, label, description }) => {
	const { setValue } = useFormContext()
	const [date, setDate] = useState<Date | undefined>(defaultValue ? createDate(defaultValue) : undefined)
	const [anchorEl, setAnchorEl] = useState<HTMLButtonElement | null>(null)

	const containerRef = useRef<HTMLDivElement>(null)

	const monthWrapperRef = useRef<HTMLDivElement>(null)
	const yearWrapperRef = useRef<HTMLDivElement>(null)
	const selectedMonthRef = useRef<HTMLDivElement>(null)
	const selectedYearRef = useRef<HTMLDivElement>(null)

	const {
		onChageDate,
		open,
		setOpen,
		mode,
		setMode,
		getDate,
		isSelectedDay,
		changeDay,
		getRenderedMonthName,
		getRenderedYear,
		handleShowNextMonth,
		handleShowPrevMonth,
		getMonthList,
		changeMonth,
		getYearsList,
		changeYear,
		getRenderedMonth,
		isLoading,
		goToToday,
		getDaysArray,
		getDayMonthOffset,
		setDate: setPickerDate,
	} = useMemo(
		() => new CustomDatePicker({
			locale: enLocale,
			date: defaultValue ? formatDate(createDate(defaultValue)) : undefined,
			delayTimeout: 0,
		}), [])


	useEffect(() => {
		setValue(name, date ? formatDate(date) : undefined)
		// change date listener
		onChageDate((newdate: Date) => {
			setValue(name, getDate() ? formatDate(newdate) : "", {
				shouldValidate: true,
			})
			setDate(newdate)
		})

	}, [])

	const daysList = getDaysArray()



	const handleSmothScroll = (
		parentRef: React.RefObject<HTMLDivElement>,
		itemRef: React.RefObject<HTMLDivElement>
	) => {
		setTimeout(() => {
			parentRef.current?.scrollTo({
				top:
					(itemRef.current?.offsetTop || 0) -
					(parentRef.current?.offsetTop || 0) -
					datepickerHeight / 2 || 0,
				left: 0,
				behavior: 'smooth',
			})
		})
	}


	const RenderTitle = ({ year, month }: { year: number, month: string }) => (
		<div>
			<AppIconButton
				onClick={() => {
					setMode('year')

					handleSmothScroll(yearWrapperRef, selectedYearRef)
				}}
			>
				<AppText fontWeight={700} variant='h6'>{year}</AppText>
			</AppIconButton>
			<AppIconButton
				onClick={() => {
					setMode('month')

					handleSmothScroll(monthWrapperRef, selectedMonthRef)
				}}
			>
				<AppText fontWeight={700} variant='h6'>{month}</AppText>
			</AppIconButton>
		</div>
	)


	const getRangePickerBackgroundColor = (day: any, currentColor: string, selectColor: string, otherColor: string) => {
		if (day.state !== 'current') return otherColor
		else if (isSelectedDay(day.date)) return selectColor
		else return currentColor
	}


	const getRangePickerColor = (day: any, currentColor: string, selectColor: string, otherColor: string) => {
		if (isSelectedDay(day.date) && day.state === 'current') return selectColor
		else if (day.state === 'current') return currentColor
		else return otherColor
	}


	const dayStyle = (day: any) => ({
		backgroundColor: getRangePickerBackgroundColor(day, '#cacaca', '#2cf2f2', '#d8d8d8'),
		color: getRangePickerColor(day, '#000', '#099090', '#888'),
		width: '100%',

	})


	const id = open ? 'simple-popover' : undefined;

	const handleClose = () => {
		setAnchorEl(null)
		setOpen(false)
	}

	const handleClick = (event: MouseEvent<HTMLButtonElement>) => {
		setAnchorEl(event.currentTarget)
		setOpen(true)
	}

	const clearDate = () => {
		setValue(name, undefined, {
			shouldValidate: true,
		})
		setDate(undefined)
		setPickerDate('')
	}

	return (
		<AppGrid display='inline-block' width='100%'>
			<AppGrid ref={containerRef} >
				<AppTextFormField
					name={name}
					type='text'
					value={getDate()}
					onChange={() => { }}
					aria-describedby={id}
					onClick={handleClick}
					label={label}
					placeholder={placeholder}
					description={description}
					rightPrefix={<CalendarTodayIcon />}
				/>
				<AppPopover
					id={id}
					open={Boolean(open)}
					anchorEl={anchorEl}
					onClose={handleClose}
					anchorOrigin={{
						vertical: 'bottom',
						horizontal: 'left',
					}}
					PaperProps={{
						className: '--content-width'
					}}
				>
					<AppGrid display='flex' gap={16} width={300} padding={'16px 8px'}>
						{mode === 'month' && (
							<AppGrid flex={1}>
								<AppGrid
									display='flex'
									justifyContent='space-between'
									alignItems='center'
									flexDirection='row-reverse'
								>
									<AppGrid flex={1}></AppGrid>
									<div>
										<RenderTitle
											year={getRenderedYear()}
											month={getRenderedMonthName()}
										/>
									</div>
									<AppGrid flex={1}>
										<AppIconButton onClick={() => setMode('day')}>
											<ArrowBackIcon />
										</AppIconButton>
									</AppGrid>
								</AppGrid>

								<AppGrid width='100%' margin='0 auto'>
									<AppGrid
										ref={monthWrapperRef}
										height={datepickerHeight}
										overflow='auto'
									>
										{getMonthList().map((month) => (
											<AppGrid
												key={month.name}
												ref={
													getRenderedMonth() === month.monthNumber
														? selectedMonthRef
														: undefined
												}
												padding='1px 5px'
												bgcolor={
													getRenderedMonth() === month.monthNumber
														? '#cacaca'
														: '#fff'
												}
											>
												<AppIconButton
													style={{ width: '100%' }}
													onClick={() => changeMonth(month.monthNumber)}
												>
													<p>{month.name}</p>
												</AppIconButton>
											</AppGrid>
										))}
									</AppGrid>
								</AppGrid>
							</AppGrid>
						)}

						{mode === 'year' && (
							<AppGrid flex={1}>
								<AppGrid
									display='flex'
									justifyContent='space-between'
									alignItems='center'
									flexDirection='row-reverse'
								>
									<AppGrid flex={1}></AppGrid>
									<div>
										<RenderTitle
											year={getRenderedYear()}
											month={getRenderedMonthName()}
										/>
									</div>
									<AppGrid flex={1}>
										<AppIconButton onClick={() => setMode('day')}>
											<ArrowBackIcon />
										</AppIconButton>
									</AppGrid>
								</AppGrid>

								<AppGrid width={'100%'} margin='0 auto'>
									<AppGrid
										display='flex'
										height={datepickerHeight}
										overflow='auto'
										flexWrap='wrap'
										gap={1}
										ref={yearWrapperRef}
									>
										{getYearsList(1950, 2050).map((year) => (
											<AppGrid
												key={year}
												ref={
													getRenderedYear() === year
														? selectedYearRef
														: undefined
												}
												bgcolor={getRenderedYear() === year ? '#cacaca' : '#fafafa'}
												textAlign='center'
												width='19%'
											>
												<AppIconButton
													onClick={() => changeYear(year)}
													color={getRenderedYear() === year ? 'inherit' : 'default'}
												>
													{year}
												</AppIconButton>
											</AppGrid>
										))}
									</AppGrid>
								</AppGrid>
							</AppGrid>
						)}


						{mode === 'day' && !isLoading && (
							<AppGrid flex={1}>
								<div>
									<AppGrid
										display='flex'
										justifyContent='space-between'
										alignItems='center'
									>
										<div>
											<AppIconButton onClick={handleShowPrevMonth}>
												<ChevronLeftIcon />
											</AppIconButton>
										</div>
										<RenderTitle
											year={getRenderedYear()}
											month={getRenderedMonthName()}
										/>
										<div>
											<AppIconButton onClick={handleShowNextMonth}>
												<ChevronRightIcon />
											</AppIconButton>
										</div>
									</AppGrid>

									<AppGrid
										display='flex'
										padding='7px 0 5px'
										flexWrap='wrap'
									>
										{weeksTitle.map((week) => (
											<AppGrid
												key={week}
												bgcolor='#dadada'
												textAlign='center'
												width={`${100 / 7}%`}
											>
												<span>{week}</span>
											</AppGrid>
										))}
									</AppGrid>

									<AppGrid
										display='flex'
										flexWrap='wrap'
										gap='2px'

									>
										{Array(getDayMonthOffset(0)).fill('').map((_, index) => (
											<AppGrid
												key={index}
												width={`calc(${100 / 7}% - 2px)`}
											>
											</AppGrid>
										))}

										{daysList.map((day, index) => {
											return (
												<AppGrid
													key={index}
													width={`calc(${100 / 7}% - 2px)`}
												>
													<AppIconButton
														style={dayStyle(day)}
														disabled={day.day === 0}
														onClick={() => {
															changeDay(day.date, day.state)
															setOpen(false)
														}}
													>
														{day.day}
													</AppIconButton>
												</AppGrid>
											)
										})}
									</AppGrid>
								</div>
								<AppGrid mt={4} display='flex' flexDirection='column' gap={4}>
									<AppButton fullWidth onClick={goToToday}>
										<AppText>Go To Today</AppText>
									</AppButton>

									<AppButton variant='outlined' color='warning' fullWidth onClick={clearDate}>
										<AppText>Clear Date</AppText>
									</AppButton>
								</AppGrid>
							</AppGrid>
						)}
					</AppGrid>
				</AppPopover>
			</AppGrid>
		</AppGrid >
	)
}

export default AppDatepickerForm
