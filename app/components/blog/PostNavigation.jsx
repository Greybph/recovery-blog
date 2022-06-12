import {useState, useEffect, useRef} from 'react'
import Select from 'react-select'

function PostNavigation({...items}) {
  const [section, setSection] = useState()
  const selectRef = useRef()
  
  const scrollOptions = () => window.innerWidth > 500 ?
    {behavior: 'smooth'} : true

  const options = 
    items.items.map(item => ({value: item[1], label: item[0]}))

  const styleOptions = {
    control: (provided, state) => ({
      ...provided,
      width: "45%",
      cursor: 'pointer',
    }),
    option: (provided) => ({
      ...provided,
      cursor: 'pointer'
    }),
    placeholder: (provided) => ({
      ...provided,
      color: "#475569",
    }),
    dropdownIndicator: (provided) => ({
      ...provided,
      color: "#64748b",
      '&:hover': {color: '#0f172a'}
    }),
    
  }
  
  useEffect(() => {
      const el = document.getElementById(section)
      if (el) {
        el.scrollIntoView(scrollOptions())
      }
      selectRef.current.setValue("Introduction")
  }, [section])

  return (
    <div>
      <Select 
        aria-label='post navigations'
        styles={styleOptions}
        ref={selectRef}
        onChange={(e) => setSection(e.value)}
        options={options} 
        placeholder="Contents" 
        isSearchable={false}
      />
    </div>
  )
}

export default PostNavigation