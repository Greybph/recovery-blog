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
    control: (provided) => ({
      ...provided,
      width: "45%",
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
        title="Post sections"
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