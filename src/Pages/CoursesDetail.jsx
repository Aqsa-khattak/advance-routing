import { useParams } from 'react-router-dom'

const CoursesDetail = () => {


    const param = useParams()
      console.log(param);
      console.log(param.id);

  return (
    <div>
      {/* <h1>Courses Detail Section</h1> */}
      <h1>{param.id}Courses Detail Section</h1>
    </div>
  )
}

export default CoursesDetail
