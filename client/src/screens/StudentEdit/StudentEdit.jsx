import { useParams, useHistory } from 'react-router-dom'
import { useState, useEffect } from 'react'
import "./StudentEdit.css"

function StudentEdit({handleUpdate, students}) {
    const [student, setStudent] = useState({})
    const params = useParams()
    const { id } = params
    const history = useHistory()
    const [studentData, setStudentData] = useState({
        firstName: '',
        lastName: '',
        grade: '',
        period: '',
    })
    const [commentData, setCommentData] = useState({
        comment: ''
    })
    const { firstName, lastName, grade, period } = studentData
    const { comment } = commentData

    // useEffect(() => {
    //     console.log(id)
    //     const stud = students.find(student => student.id === Number(id))
    //     setStudent(stud)
    //     fetchComments(Number(id))
    // }, [])

    useEffect(() => {
        if (students.length === 0) {
            history.push('/students')
        }
        const stud = students.find(student => student.id === Number(id))
        setStudentData(stud)
    }, [])

    {}

    const handleStudentChange = (e) => {
        const { name, value } = e.target
        setStudentData(prevState => ({
            ...prevState,
            [name]: value
        }))
    }
    const handleCommentChange = (e) => {
        const { name, value } = e.target
        setCommentData(prevState => ({
            ...prevState,
            [name]: value
        }))
    }

    return (
        <div className='studentDetails'>
            <div className="clipboard-border">
                <div className="clipboard">
                    <div className="student-info">
                        <label className="firstName-column">First name
                            <input
                                type='text'
                                name='firstName'
                                value={firstName}
                                onChange={handleStudentChange}
                            />
                        </label>
                        <label className="lastName-column">Last name
                            <input
                                type='text'
                                name='lastName'
                                value={lastName}
                                onChange={handleStudentChange}
                            />
                        </label>
                        <label className="grade-column">Grade
                            <input
                                type='text'
                                name='grade'
                                value={grade}
                                onChange={handleStudentChange}
                            />
                        </label>
                        <label className="period-column">Period
                            <input
                                type='text'
                                name='period'
                                value={period}
                                onChange={handleStudentChange}
                            />
                        </label>
                    </div>
                    <div className="student-comments">Comments
                        <textarea
                            type='text'
                            name='comment'
                            value={comment}
                            onChange={handleCommentChange}
                        />
                    </div>
                    <div className="buttons">
                        <button onClick={()=>handleUpdate(Number(id), studentData, commentData)}>Update</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default StudentEdit
