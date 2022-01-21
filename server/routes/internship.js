const router = require("express").Router();
const { requireAuth } = require("../middleware/auth");
const Company = require("../model/company");
const XLSX = require("xlsx");
const detailsSheet = XLSX.readFile("internship.xlsx");
// const detailsSheet = XLSX.readFile('https://1drv.ms/x/s!AijzmVsqlu-jglgYmkn6phP_EK0u?e=IZEzyR');
const sheet_name_list = detailsSheet.SheetNames;
// to show all the company
router.get("/internship/all_companies", (req, res) => {
  Company.find({}, (err, newCompany) => {
    if (err) {
      console.log(err);
    } else {
      res.header("Access-Control-Allow-Origin", "*");
      res.json(newCompany);
      // console.log(newCompany);
    }
  });
  // res.json(XLSX.utils.sheet_to_json(detailsSheet.Sheets[sheet_name_list[0]]));
});

// router.get("/internship/:_id", async (req, res) => {
//   await Company.findById(req.params._id, (err, company) => {
//     if (err) {
//       console.log(err);
//     } else {
//       res.json(company);
//       // console.log(newCompany);
//     }
//   });
// });



router.get("/internship/:company_name", (req, res) => {
  // console.log(`${req.params.company_name}`);
  const company= Company.findOne({company_name:req.params.company_name}, (err, company) => {
    if (err) {
      console.log(err);
    } else {
      // console.log(newCompany);
      res.json(company);
    }
  });
});



// to post new company by admin
// router.post("/internship/add_company", async (req, res) => {
//   const { name, selected_students, description, year } = req.body;
//   const newCompany = new Company({
//     name: name,
//     selected_students: selected_students,
//     description: description,
//     year: year,
//   });
//   await newCompany.save();
//   res.send(newCompany);
// });

router.post("/internship/add_company", async (req, res) => {
  const { company_name, selected_students, test_series, step3, technical_round, HR_round, projects, PORs, step1, step2, year, logo, eligible_branch, CGPA, takeaways } = req.body;
  const newCompany = new Company({
   company_name: company_name,
    selected_students: selected_students,
    year: year,
    logo: logo,
    eligible_branch: eligible_branch,
    CGPA: CGPA,
    takeaways: takeaways,
    test_series: test_series,
    selection_process: {
      step1: step1,
      step2: step2,
      step3: step3
    },
    interview_round: {
      technical_round: technical_round,
      HR_round: HR_round
    },
    influence_of: {
      projects: projects,
      PORs: PORs
    },
  });
  await newCompany.save();
  res.send(newCompany);
});



//update a details of a company
router.put("/internship/update/:id", async (req, res) => {
  await Company.findByIdAndUpdate(
    req.params.id,
    {
      name: req.body.name,
      selected_students: req.body.selected_students,
      description: req.body.description,
      year: req.body.year,
    },
    { new: true }
  )
    .then((company) => {
      if (!company) {
        return res.status(404).send({
          message: "Company not found with id " + req.params.id,
        });
      } else {
        res.send(company);
      }
    })
    .catch((err) => {
      console.log(err);
    });
});

// to delete a company for internship
router.delete("/internship/delete/:id", async (req, res) => {
  await Company.findByIdAndRemove(req.params.id)
    .then((company) => {
      if (!company) {
        res.status(404).send({
          message: "Note not found with id " + req.params.id,
        });
      }
    })
    .catch((err) => {
      console.log(err);
    });
});

// router.get("/*", (req, res) => {
//   res.send("page not found");
// });

module.exports = router;
