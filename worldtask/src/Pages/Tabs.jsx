import React, { useState } from 'react';
import '../Components/Tabs.css'; // Corrected import path
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons';
import EditNoteIcon from '@mui/icons-material/EditNote';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';

const Tab = () => {
  const [activeTab, setActiveTab] = useState('tab1');

  const handleTabClick = (tabId) => {
    setActiveTab(tabId);
  };
  const [searchQuery, setSearchQuery] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
    // Handle form submission
    console.log('Search query:', searchQuery);
  };

  return (
    <div className="container1">
      <div className='container2'>
      <div className="tabs">
        <button
          className={activeTab === 'tab1' ? 'active' : ''}
          onClick={() => handleTabClick('tab1')}
        >
          All India Govt,Jobs
        </button>
        <button
          className={activeTab === 'tab2' ? 'active' : ''}
          onClick={() => handleTabClick('tab2')}
        >
          State Govt,Jobs
        </button>
        <button
          className={activeTab === 'tab3' ? 'active' : ''}
          onClick={() => handleTabClick('tab3')}
        >
          Bank,Jobs
        </button>
        <button
          className={activeTab === 'tab4' ? 'active' : ''}
          onClick={() => handleTabClick('tab4')}
        >
          Teaching,Jobs
        </button>
        <button
          className={activeTab === 'tab5' ? 'active' : ''}
          onClick={() => handleTabClick('tab5')}
        >
          Engineering,Jobs
        </button>
        <button
          className={activeTab === 'tab6' ? 'active' : ''}
          onClick={() => handleTabClick('tab6')}
        >
          Railway,Jobs
        </button>
      </div>
      <div className="container3">
        <h1 className='heading1'>Syllabus</h1>
        <h1 className='heading2'>PQR</h1>
        <h1 className='heading3'>Answer Key</h1>
        <h1 className='heading4'>Results</h1>
        <h1 className='heading5'>Cut-Off</h1>
        <div>
          <div>
        <form className="form1" onSubmit={handleSubmit}>
      <input className="input1"
        type="text" 
        name="search" 
        placeholder="Choose Your State" 
        value={searchQuery} 
        onChange={(e) => setSearchQuery(e.target.value)} 
      />
      <button className='button1' type="submit">
        <FontAwesomeIcon className='i' icon={faSearch} aria-hidden="true" />
      </button>
    </form>
    </div>
    </div>
      </div>
      </div>
      <div className="tab-content">
        {activeTab === 'tab1' && <div>
          <div className='containerjob1'>
        <h1 className='statename'>State Govt.Jobs</h1>
        <button className='buttonjob1'>New</button>

        <label for="state"></label>
        <select  className="selectbtn" name="state" id="cars">
        <option value="volvo">Andhra Pradesh</option>
        <option value="saab">Telangana</option>
        <option value="mercedes">Kerala</option>
        <option value="audi">Tamilnadu</option>
        <option value="audi">Delhi</option>

        </select>
        <label for="degrees" className='degree1'></label>
        <select  className="selectbtn1" name="degrees" id="cars">
        <option className ="cha" value="volvo">Qualification</option>
        <option value="saab">B.tect</option>
        <option value="mercedes">MBA</option>
        <option value="audi">Msc</option>
        <option value="audi">Degree</option>
        </select>
        <div className='buttonjob2'>
        <EditNoteIcon  className='icon1' />
        <h1 className='h1'>Filter</h1> </div>
      </div>
      <div className="containerjob2">
        <div className='containerjob3'>
          <h1 className='medical'>Medical & health Deparment</h1>
          <button className='aroyaBtn'>Arogya Mitras & Team Leaders- 19 POSTS</button>
          <h2 className='h2'>Job Description:</h2>
          <p className='p1'>notification for recruitment of carogya mithras & team leaders on outsourcing bosis at dr. yar net work hospitals in prokosom district on consolidated pay under the control of district co-ordinator dr.ysrahct, ongole, prakasam district, through district selection committee In prakasam district</p>
          <h1 className='qualification'>Qualification:</h1>
          <p className='p2'>B.Sc (Nursing)/M.Sc(Nursing)</p>
          <p className='p3'>/B.Pharmacy/Ph armacy-D/B.Sc</p>
          <h1 className='date1'>Post Date: <span className='span1'>3rd Mar, 2024</span></h1>
          <h1 className='date1'>Time Date: <span className='span1'>1st June, 2024</span></h1>
          <div className='containerEnd'>
            <button className='endbtn1'>Notification</button>
            <button className='endBtn1'>Apply</button>
            <FavoriteBorderIcon className='love1'/>
          </div>
        </div>
        <div className='containerjob4'>
          <h1 className='medical'>Medical & health Deparment</h1>
          <button className='aroyaBtn'>Arogya Mitras & Team Leaders- 19 POSTS</button>
          <h2 className='h2'>Job Description:</h2>
          <p className='p1'>notification for recruitment of carogya mithras & team leaders on outsourcing bosis at dr. yar net work hospitals in prokosom district on consolidated pay under the control of district co-ordinator dr.ysrahct, ongole, prakasam district, through district selection committee In prakasam district</p>
          <h1 className='qualification'>Qualification:</h1>
          <p className='p2'>B.Sc (Nursing)/M.Sc(Nursing)</p>
          <p className='p3'>/B.Pharmacy/Ph armacy-D/B.Sc</p>
          <h1 className='date1'>Post Date: <span className='span1'>3rd Mar, 2024</span></h1>
          <h1 className='date1'>Time Date: <span className='span1'>1st June, 2024</span></h1>
          <div className='containerEnd'>
            <button className='endbtn1'>Notification</button>
            <button className='endBtn1'>Apply</button>
            <FavoriteBorderIcon className='love1'/>
          </div> 
        </div>
      </div>
    </div>}
    
        {activeTab === 'tab2' && 
        <div>
          <div>
          <div className='containerjob1'>
        <h1 className='statename'>State Govt.Jobs</h1>
        <button className='buttonjob1'>New</button>

        <label for="state"></label>
        <select  className="selectbtn" name="state" id="cars">
        <option value="volvo">Andhra Pradesh</option>
        <option value="saab">Telangana</option>
        <option value="mercedes">Kerala</option>
        <option value="audi">Tamilnadu</option>
        <option value="audi">Delhi</option>

        </select>
        <label for="degrees" className='degree1'></label>
        <select  className="selectbtn1" name="degrees" id="cars">
        <option className ="cha" value="volvo">Qualification</option>
        <option value="saab">B.tect</option>
        <option value="mercedes">MBA</option>
        <option value="audi">Msc</option>
        <option value="audi">Degree</option>
        </select>
        <div className='buttonjob2'>
        <EditNoteIcon  className='icon1' />
        <h1 className='h1'>Filter</h1> </div>
      </div>
      <div className="containerjob2">
        <div className='containerjob3'>
          <h1 className='medical'>Medical & health Deparment</h1>
          <button className='aroyaBtn'>Arogya Mitras & Team Leaders- 19 POSTS</button>
          <h2 className='h2'>Job Description:</h2>
          <p className='p1'>notification for recruitment of carogya mithras & team leaders on outsourcing bosis at dr. yar net work hospitals in prokosom district on consolidated pay under the control of district co-ordinator dr.ysrahct, ongole, prakasam district, through district selection committee In prakasam district</p>
          <h1 className='qualification'>Qualification:</h1>
          <p className='p2'>B.Sc (Nursing)/M.Sc(Nursing)</p>
          <p className='p3'>/B.Pharmacy/Ph armacy-D/B.Sc</p>
          <h1 className='date1'>Post Date: <span className='span1'>3rd Mar, 2024</span></h1>
          <h1 className='date1'>Time Date: <span className='span1'>1st June, 2024</span></h1>
          <div className='containerEnd'>
            <button className='endbtn1'>Notification</button>
            <button className='endBtn1'>Apply</button>
            <FavoriteBorderIcon className='love1'/>
          </div>
        </div>
        <div className='containerjob4'>
          <h1 className='medical'>Medical & health Deparment</h1>
          <button className='aroyaBtn'>Arogya Mitras & Team Leaders- 19 POSTS</button>
          <h2 className='h2'>Job Description:</h2>
          <p className='p1'>notification for recruitment of carogya mithras & team leaders on outsourcing bosis at dr. yar net work hospitals in prokosom district on consolidated pay under the control of district co-ordinator dr.ysrahct, ongole, prakasam district, through district selection committee In prakasam district</p>
          <h1 className='qualification'>Qualification:</h1>
          <p className='p2'>B.Sc (Nursing)/M.Sc(Nursing)</p>
          <p className='p3'>/B.Pharmacy/Ph armacy-D/B.Sc</p>
          <h1 className='date1'>Post Date: <span className='span1'>3rd Mar, 2024</span></h1>
          <h1 className='date1'>Time Date: <span className='span1'>1st June, 2024</span></h1>
          <div className='containerEnd'>
            <button className='endbtn1'>Notification</button>
            <button className='endBtn1'>Apply</button>
            <FavoriteBorderIcon className='love1'/>
          </div> 
        </div>
      </div>
    </div>
        </div>
        
        }
        {activeTab === 'tab3' && 
        <div>
        <div className='containerjob1'>
      <h1 className='statename'>State Govt.Jobs</h1>
      <button className='buttonjob1'>New</button>

      <label for="state"></label>
      <select  className="selectbtn" name="state" id="cars">
      <option value="volvo">Andhra Pradesh</option>
      <option value="saab">Telangana</option>
      <option value="mercedes">Kerala</option>
      <option value="audi">Tamilnadu</option>
      <option value="audi">Delhi</option>

      </select>
      <label for="degrees" className='degree1'></label>
      <select  className="selectbtn1" name="degrees" id="cars">
      <option className ="cha" value="volvo">Qualification</option>
      <option value="saab">B.tect</option>
      <option value="mercedes">MBA</option>
      <option value="audi">Msc</option>
      <option value="audi">Degree</option>
      </select>
      <div className='buttonjob2'>
      <EditNoteIcon  className='icon1' />
      <h1 className='h1'>Filter</h1> </div>
    </div>
    <div className="containerjob2">
      <div className='containerjob3'>
        <h1 className='medical'>Medical & health Deparment</h1>
        <button className='aroyaBtn'>Arogya Mitras & Team Leaders- 19 POSTS</button>
        <h2 className='h2'>Job Description:</h2>
        <p className='p1'>notification for recruitment of carogya mithras & team leaders on outsourcing bosis at dr. yar net work hospitals in prokosom district on consolidated pay under the control of district co-ordinator dr.ysrahct, ongole, prakasam district, through district selection committee In prakasam district</p>
        <h1 className='qualification'>Qualification:</h1>
        <p className='p2'>B.Sc (Nursing)/M.Sc(Nursing)</p>
        <p className='p3'>/B.Pharmacy/Ph armacy-D/B.Sc</p>
        <h1 className='date1'>Post Date: <span className='span1'>3rd Mar, 2024</span></h1>
        <h1 className='date1'>Time Date: <span className='span1'>1st June, 2024</span></h1>
        <div className='containerEnd'>
          <button className='endbtn1'>Notification</button>
          <button className='endBtn1'>Apply</button>
          <FavoriteBorderIcon className='love1'/>
        </div>
      </div>
      <div className='containerjob4'>
        <h1 className='medical'>Medical & health Deparment</h1>
        <button className='aroyaBtn'>Arogya Mitras & Team Leaders- 19 POSTS</button>
        <h2 className='h2'>Job Description:</h2>
        <p className='p1'>notification for recruitment of carogya mithras & team leaders on outsourcing bosis at dr. yar net work hospitals in prokosom district on consolidated pay under the control of district co-ordinator dr.ysrahct, ongole, prakasam district, through district selection committee In prakasam district</p>
        <h1 className='qualification'>Qualification:</h1>
        <p className='p2'>B.Sc (Nursing)/M.Sc(Nursing)</p>
        <p className='p3'>/B.Pharmacy/Ph armacy-D/B.Sc</p>
        <h1 className='date1'>Post Date: <span className='span1'>3rd Mar, 2024</span></h1>
        <h1 className='date1'>Time Date: <span className='span1'>1st June, 2024</span></h1>
        <div className='containerEnd'>
          <button className='endbtn1'>Notification</button>
          <button className='endBtn1'>Apply</button>
          <FavoriteBorderIcon className='love1'/>
        </div> 
      </div>
      </div>
  </div>

        
        }
        {activeTab === 'tab4' && 
        <div>
        <div className='containerjob1'>
      <h1 className='statename'>State Govt.Jobs</h1>
      <button className='buttonjob1'>New</button>

      <label for="state"></label>
      <select  className="selectbtn" name="state" id="cars">
      <option value="volvo">Andhra Pradesh</option>
      <option value="saab">Telangana</option>
      <option value="mercedes">Kerala</option>
      <option value="audi">Tamilnadu</option>
      <option value="audi">Delhi</option>

      </select>
      <label for="degrees" className='degree1'></label>
      <select  className="selectbtn1" name="degrees" id="cars">
      <option className ="cha" value="volvo">Qualification</option>
      <option value="saab">B.tect</option>
      <option value="mercedes">MBA</option>
      <option value="audi">Msc</option>
      <option value="audi">Degree</option>
      </select>
      <div className='buttonjob2'>
      <EditNoteIcon  className='icon1' />
      <h1 className='h1'>Filter</h1> </div>
    </div>
    <div className="containerjob2">
      <div className='containerjob3'>
        <h1 className='medical'>Medical & health Deparment</h1>
        <button className='aroyaBtn'>Arogya Mitras & Team Leaders- 19 POSTS</button>
        <h2 className='h2'>Job Description:</h2>
        <p className='p1'>notification for recruitment of carogya mithras & team leaders on outsourcing bosis at dr. yar net work hospitals in prokosom district on consolidated pay under the control of district co-ordinator dr.ysrahct, ongole, prakasam district, through district selection committee In prakasam district</p>
        <h1 className='qualification'>Qualification:</h1>
        <p className='p2'>B.Sc (Nursing)/M.Sc(Nursing)</p>
        <p className='p3'>/B.Pharmacy/Ph armacy-D/B.Sc</p>
        <h1 className='date1'>Post Date: <span className='span1'>3rd Mar, 2024</span></h1>
        <h1 className='date1'>Time Date: <span className='span1'>1st June, 2024</span></h1>
        <div className='containerEnd'>
          <button className='endbtn1'>Notification</button>
          <button className='endBtn1'>Apply</button>
          <FavoriteBorderIcon className='love1'/>
        </div>
      </div>
      <div className='containerjob4'>
        <h1 className='medical'>Medical & health Deparment</h1>
        <button className='aroyaBtn'>Arogya Mitras & Team Leaders- 19 POSTS</button>
        <h2 className='h2'>Job Description:</h2>
        <p className='p1'>notification for recruitment of carogya mithras & team leaders on outsourcing bosis at dr. yar net work hospitals in prokosom district on consolidated pay under the control of district co-ordinator dr.ysrahct, ongole, prakasam district, through district selection committee In prakasam district</p>
        <h1 className='qualification'>Qualification:</h1>
        <p className='p2'>B.Sc (Nursing)/M.Sc(Nursing)</p>
        <p className='p3'>/B.Pharmacy/Ph armacy-D/B.Sc</p>
        <h1 className='date1'>Post Date: <span className='span1'>3rd Mar, 2024</span></h1>
        <h1 className='date1'>Time Date: <span className='span1'>1st June, 2024</span></h1>
        <div className='containerEnd'>
          <button className='endbtn1'>Notification</button>
          <button className='endBtn1'>Apply</button>
          <FavoriteBorderIcon className='love1'/>
        </div> 
      </div>
      </div>
  </div>

        }
        {activeTab === 'tab5' && 
        <div>
        <div className='containerjob1'>
      <h1 className='statename'>State Govt.Jobs</h1>
      <button className='buttonjob1'>New</button>

      <label for="state"></label>
      <select  className="selectbtn" name="state" id="cars">
      <option value="volvo">Andhra Pradesh</option>
      <option value="saab">Telangana</option>
      <option value="mercedes">Kerala</option>
      <option value="audi">Tamilnadu</option>
      <option value="audi">Delhi</option>

      </select>
      <label for="degrees" className='degree1'></label>
      <select  className="selectbtn1" name="degrees" id="cars">
      <option className ="cha" value="volvo">Qualification</option>
      <option value="saab">B.tect</option>
      <option value="mercedes">MBA</option>
      <option value="audi">Msc</option>
      <option value="audi">Degree</option>
      </select>
      <div className='buttonjob2'>
      <EditNoteIcon  className='icon1' />
      <h1 className='h1'>Filter</h1> </div>
    </div>
    <div className="containerjob2">
      <div className='containerjob3'>
        <h1 className='medical'>Medical & health Deparment</h1>
        <button className='aroyaBtn'>Arogya Mitras & Team Leaders- 19 POSTS</button>
        <h2 className='h2'>Job Description:</h2>
        <p className='p1'>notification for recruitment of carogya mithras & team leaders on outsourcing bosis at dr. yar net work hospitals in prokosom district on consolidated pay under the control of district co-ordinator dr.ysrahct, ongole, prakasam district, through district selection committee In prakasam district</p>
        <h1 className='qualification'>Qualification:</h1>
        <p className='p2'>B.Sc (Nursing)/M.Sc(Nursing)</p>
        <p className='p3'>/B.Pharmacy/Ph armacy-D/B.Sc</p>
        <h1 className='date1'>Post Date: <span className='span1'>3rd Mar, 2024</span></h1>
        <h1 className='date1'>Time Date: <span className='span1'>1st June, 2024</span></h1>
        <div className='containerEnd'>
          <button className='endbtn1'>Notification</button>
          <button className='endBtn1'>Apply</button>
          <FavoriteBorderIcon className='love1'/>
        </div>
      </div>
      <div className='containerjob4'>
        <h1 className='medical'>Medical & health Deparment</h1>
        <button className='aroyaBtn'>Arogya Mitras & Team Leaders- 19 POSTS</button>
        <h2 className='h2'>Job Description:</h2>
        <p className='p1'>notification for recruitment of carogya mithras & team leaders on outsourcing bosis at dr. yar net work hospitals in prokosom district on consolidated pay under the control of district co-ordinator dr.ysrahct, ongole, prakasam district, through district selection committee In prakasam district</p>
        <h1 className='qualification'>Qualification:</h1>
        <p className='p2'>B.Sc (Nursing)/M.Sc(Nursing)</p>
        <p className='p3'>/B.Pharmacy/Ph armacy-D/B.Sc</p>
        <h1 className='date1'>Post Date: <span className='span1'>3rd Mar, 2024</span></h1>
        <h1 className='date1'>Time Date: <span className='span1'>1st June, 2024</span></h1>
        <div className='containerEnd'>
          <button className='endbtn1'>Notification</button>
          <button className='endBtn1'>Apply</button>
          <FavoriteBorderIcon className='love1'/>
        </div> 
      </div>
      </div>
  </div>

        }
        {activeTab === 'tab6' && 
        <div>
        <div className='containerjob1'>
      <h1 className='statename'>State Govt.Jobs</h1>
      <button className='buttonjob1'>New</button>

      <label for="state"></label>
      <select  className="selectbtn" name="state" id="cars">
      <option value="volvo">Andhra Pradesh</option>
      <option value="saab">Telangana</option>
      <option value="mercedes">Kerala</option>
      <option value="audi">Tamilnadu</option>
      <option value="audi">Delhi</option>

      </select>
      <label for="degrees" className='degree1'></label>
      <select  className="selectbtn1" name="degrees" id="cars">
      <option className ="cha" value="volvo">Qualification</option>
      <option value="saab">B.tect</option>
      <option value="mercedes">MBA</option>
      <option value="audi">Msc</option>
      <option value="audi">Degree</option>
      </select>
      <div className='buttonjob2'>
      <EditNoteIcon  className='icon1' />
      <h1 className='h1'>Filter</h1> </div>
    </div>
    <div className="containerjob2">
      <div className='containerjob3'>
        <h1 className='medical'>Medical & health Deparment</h1>
        <button className='aroyaBtn'>Arogya Mitras & Team Leaders- 19 POSTS</button>
        <h2 className='h2'>Job Description:</h2>
        <p className='p1'>notification for recruitment of carogya mithras & team leaders on outsourcing bosis at dr. yar net work hospitals in prokosom district on consolidated pay under the control of district co-ordinator dr.ysrahct, ongole, prakasam district, through district selection committee In prakasam district</p>
        <h1 className='qualification'>Qualification:</h1>
        <p className='p2'>B.Sc (Nursing)/M.Sc(Nursing)</p>
        <p className='p3'>/B.Pharmacy/Ph armacy-D/B.Sc</p>
        <h1 className='date1'>Post Date: <span className='span1'>3rd Mar, 2024</span></h1>
        <h1 className='date1'>Time Date: <span className='span1'>1st June, 2024</span></h1>
        <div className='containerEnd'>
          <button className='endbtn1'>Notification</button>
          <button className='endBtn1'>Apply</button>
          <FavoriteBorderIcon className='love1'/>
        </div>
      </div>
      <div className='containerjob4'>
        <h1 className='medical'>Medical & health Deparment</h1>
        <button className='aroyaBtn'>Arogya Mitras & Team Leaders- 19 POSTS</button>
        <h2 className='h2'>Job Description:</h2>
        <p className='p1'>notification for recruitment of carogya mithras & team leaders on outsourcing bosis at dr. yar net work hospitals in prokosom district on consolidated pay under the control of district co-ordinator dr.ysrahct, ongole, prakasam district, through district selection committee In prakasam district</p>
        <h1 className='qualification'>Qualification:</h1>
        <p className='p2'>B.Sc (Nursing)/M.Sc(Nursing)</p>
        <p className='p3'>/B.Pharmacy/Ph armacy-D/B.Sc</p>
        <h1 className='date1'>Post Date: <span className='span1'>3rd Mar, 2024</span></h1>
        <h1 className='date1'>Time Date: <span className='span1'>1st June, 2024</span></h1>
        <div className='containerEnd'>
          <button className='endbtn1'>Notification</button>
          <button className='endBtn1'>Apply</button>
          <FavoriteBorderIcon className='love1'/>
        </div> 
      </div>
      </div>
  </div>

        }
      </div>
    </div>
  );
};

export default Tab;
