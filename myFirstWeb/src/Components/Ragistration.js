import React, { useState } from 'react'


const Ragistration = () => {
    const [state, setState] = useState(0)
    const [data, setData] = useState({
        fname: '',
        lname: '',
        email: '',
        password: ''
    })

    const handleInput = (e) => {
        const { name, value } = e.target;
        setData((oldData) => {
            return { ...oldData, [name]: value }
        })
        // console.log(data)
    }

    const formSubmitted = (e) => {
        setState(state + 1)
        document.title = `${state + 1} Ragistration SuccessFully`

        e.preventDefault();

        alert(`my name is ${data.fname}  ${data.lname}.
        my email Id ${data.email} and password are ${data.password}`)
        console.log(data)


    }
    return (
        <div className='container-fluid' style={{
            backgroundColor: '#27ae60', height: '90vh'
        }} >
            <div className='row justify-content-center'>
                <div className='col-6 mt-5'>
                    <form>
                        <div className="mb-3">
                            <label for="exampleInputEmail1" className="form-label">First Name </label>
                            <input type="text" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"
                                onChange={handleInput}
                                value={data.fname}
                                name='fname'
                            />
                            <div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div>
                        </div>
                        <div className="mb-3">
                            <label for="exampleInputPassword1" className="form-label">Last Name </label>
                            <input type="text" className="form-control" id="exampleInputPassword1"
                                onChange={handleInput}
                                value={data.lname}
                                name='lname'
                            />
                        </div>

                        <div className="mb-3">
                            <label for="exampleInputPassword1" className="form-label">Email Id</label>
                            <input type="email" className="form-control" id="exampleInputPassword1"
                                onChange={handleInput}
                                value={data.email}
                                name='email'
                            />
                        </div>

                        <div className="mb-3">
                            <label for="exampleInputPassword1" className="form-label">Password</label>
                            <input type="password" className="form-control" id="exampleInputPassword1"
                                onChange={handleInput}
                                value={data.password}
                                name='password'
                            />
                        </div>
                        <p>You will  be follow all the Rules and ragulation of Institude.</p>
                        <div className="mb-3 form-check">
                            <input type="checkbox" className="form-check-input" id="exampleCheck1" />
                            <label className="form-check-label" for="exampleCheck1">Term & Conditions</label>
                        </div>



                        <button type="submit" className="btn btn-primary" onClick={formSubmitted}>Submit</button>
                     
                    </form>
                    
                </div>

                <div className='col-3 text-center d-flex flex-column justify-content-center'>

                    <ul>
                        <h2>Follow me</h2>
                        <li><a href='https://www.instagram.com/' target='_blank'><i className="fab fa-instagram"></i></a></li>
                        <li> <a href='https://www.facebook.com/campaign/landing.php?campaign_id=15184823432&extra_1=s%7Cc%7C589521724316%7Cb%7Cfacebook%20%27%7C&placement=&creative=589521724316&keyword=facebook%20%27&partner_id=googlesem&extra_2=campaignid%3D15184823432%26adgroupid%3D129532683516%26matchtype%3Db%26network%3Dg%26source%3Dnotmobile%26search_or_content%3Ds%26device%3Dc%26devicemodel%3D%26adposition%3D%26target%3D%26targetid%3Dkwd-327195741349%26loc_physical_ms%3D1007824%26loc_interest_ms%3D%26feeditemid%3D%26param1%3D%26param2%3D&gclid=Cj0KCQjw98ujBhCgARIsAD7QeAgVwqzaNy7dh32689Axbokn5zmRG4Qt-jNcSjzGJaw3Y2VjXiZ9R1kaAjgSEALw_wcB' target='_blank'><i className="fab fa-facebook" aria-hidden="true"></i></a></li>
                        <li><i className="fab fa-youtube-play" aria-hidden="true"></i></li>
                        <li><i className="fab fa-twitter" aria-hidden="true"></i></li>
                        <li><i className="fab fa-telegram" aria-hidden="true"></i></li>
                    </ul>
                </div>

            </div>
        </div>
    )
}

export default Ragistration;