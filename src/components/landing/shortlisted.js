import React from "react";

const entries = ["Abhilash Viswa - Ponnani,  Malappuram(dist)", "Abinaya Ramamurthi - Thanjavur", "Abinesh Sekar - Pudukkottai", "Abishek Allan - Madurai", "Abishek Vaidyanathan - Valparai", "Ajay S - Kanyakumari", "Ajitkumar S - Vellore/nandhiyalam", "Alaghu Prasanth A - Tirupur", "AMAR RAMESH - Chennai", "ANAND S - TIRUCHIRAPPALLI", "Ar Rez - Dindigul", "Aravind A J - Madurai", "Aravindhan Kamaraj - tiruvarur", "Arjun Venkatesh - Chennai", "Arul Prakash - Trichy", "Arun pandi - Usilampatti", "Arunkumar Varadharajan - Tiruchengode,Namakkal", "Arunprasath V M - Chennai", "Aswin Vijay - Coimbatore", "Babu D - Tiruchirappalli", "Babu Logesh - Chennai", "Badrinarayanan Kannan - Chennai", "BALASANKAR ALIAS AJITH - Tuticorin", "Beema Das - Chennai", "Bharath M - Bangalore", "Bharath mari - Chennai", "Bothees Bothees - Trichy", "Chakkaravarthi Sudhersan - Kumbakonam", "CHIDAMBARAM SIVATHANU - TIRUCHIRAPPALLI", "Dhenesh Annamalai - Salem", "Dinesh P - Perambalur", "Gautam Sekar - Madurai", "Gayathri Sekar - Tambaram", "Gopi Shyam - Madurai", "Gunasekaran Ramadoss - Chennai", "Haarihaaran Madeswaran - Gobichettipalayam", "HARIKRISHNA NARLA - KARIMNAGAR", "Jagadeesh Babu Gnanasekaran - Vellore", "Jenith M - Tirunelveli", "Karthi Karthick - Chennai", "Karthik Sriraman - Chennai", "Karthikeyan Radha - Cuddalore", "Lakshminarayanan L - Chennai", "Madhan sundhar - Tirunelveli", "Madhusudanan Parthasarathy - Chennai", "Manivannan R - Thanjavur", "MANOHARAN GOVINDARAJAN - CHENNAI", "manu vm - Malappuram", "Mohamed Siddique Jahir Hussain - Eravancheri", "Mohan Kumar Mariyappan - Virudhunagar", "Mouhamed Moustapha - Pondicherry", "Moulidharan M - Erode", "murugaraj lakshmanan - chennai", "NAVA BHARAT SELVA BALRAJ - Madurai", "Naveen Kumar P - chennai", "Naveen Raj - Salem", "Partheepan D - Namakal", "PRABU MOHAN - Tirunelveli", "Prakash Chellamuthu - Trichy", "Prashanth Swaminathan - Chennai", "Pratap J - Bangalore", "Prathap Arumugam - Puducherry", "Praveen Kumar - Pattukkottai", "Praveen M - salem", "Preeti Tamilarasan - Chennai", "R DINESH KUMAR - CHENNAI", "Raghavprasanna L - Chennai", "RajKumar R - Cuddalore", "Ravikanth Kurma - Tatipaka", "RISHINANDHAN M C - Namakkal", "S.Lenin shunmugam - Madurai", "Sachin Solomon Raj - Chennai", "Sai Prasath - Madurai", "Saleem Basha - Namakkal", "Santhosh Kumar - Chennai", "Santhosh Pandurangan - Thiruthani", "Saran Dashnamoorthy - Tiruvannamalai", "Saran Saravana - Theni", "Saravana Kumar - Thoothukudi", "Sasi Kumar - Vellore", "Sathiyaseelan .S - Chennai", "Sesha Raja Sankaran A - Chennai", "Shafiur Rahman - Gudalur-Ooty", "Sharan Ragesh - Chennai", "Siva Chandru - Chennai", "Siva Prasad B - NAGERCOIL", "Smita Joshi - Chennai", "SOWNDARYA CHIDAMBARAM - TIRUCHIRAPPALLI", "Srijith J - Chennai", "Sudharshan Kuselan - Chennai", "Sugan Murali - Chennai", "sugu maran N - trichy", "Sundaram Perumal - Theni", "Sundararajaperumal Anandakrishnan - Chennai", "Suresh Kannan - Chennai", "Suresh Kumar Chinnasamy - Chennai", "SURIYA KATHIR - ERODE", "Syed Wasim - Chennai", "Tamil Selvan - Guduvanchery", "Thirumalai A - Chennai", "Thirumalai vasan subramani - tirupattur", "Velmurugan Devarajan - Tiruchengode", "venkatakrishnan vijayarahavan - Chennai", "Vidhyatharan Rajendran - Chennai", "Vignesh A A - Chennai", "Vignesh Sekar - Pollachi", "VIGNESHWARAN KRISHNAN - BIG KANCHIPURAM", "Vineesh J - Chennai", "Vishnuvarthan Rajagopal - Pollachi", "wewin pandian - coimbatore", "YEDU KRISHNAN K B - Theni", "Zulfikhar Ahmed - Chennai"]

const Shortlisted = () => {
  return (
    <div className="post-section">
      <div className="container">
        <div className="text-center mb-4">
          <h2 className="montserrat theme-red f-700">Shortlisted Entries for Photography</h2>
        </div>
      </div>
      <div className='container-fluid'>
        <div className='row'>
          {entries.map(o => (
            <div key={o} className='col-md-3'>
              <p className='font-weight-bold mt-2 mb-2'>{o}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default Shortlisted