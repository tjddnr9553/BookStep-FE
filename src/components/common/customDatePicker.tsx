import React, { useRef, useState } from 'react'
import DatePicker from 'react-datepicker'
import 'react-datepicker/dist/react-datepicker.css'
import styles from '@/components/common/customDatePicker.module.css'
import { Calendar, Dropdown } from '@/components/icons/customIcons'
import { ko } from 'date-fns/locale'

export default function CustomDatePicker() {
  const [dateRange, setDateRange] = useState<[Date | null, Date | null]>([null, null])
  const [startDate, endDate] = dateRange
  const datePickerRef = useRef<DatePicker>(null)

  const handleContainerClick = () => {
    if (datePickerRef.current) {
      datePickerRef.current.setFocus()
    }
  }

  return (
    <div className={styles.datePickerContainer} onClick={handleContainerClick}>
      <div className={styles.calendarIcon}>
        <Calendar width={1.25} height={1.25} />
      </div>
      <DatePicker
        ref={datePickerRef}
        selected={startDate}
        onChange={(update) => setDateRange(update)}
        startDate={startDate}
        endDate={endDate}
        locale={ko}
        selectsRange
        dateFormat="yyyy.MM.dd"
        placeholderText="날짜를 선택하세요"
        className={styles.datePicker}
      />
      <div className={styles.dropdownIcon}>
        <Dropdown width={0.5} height={0.5} color={'#535353'} />
      </div>
    </div>
  )
}
