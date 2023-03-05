import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";

function FormProject() {
  const initialValues = {
    date: "",
    domain: "",
    location: "",
    owner: "",
    tenant: "",
    totalArea: 0,
    equippedArea: 0,
    commercial: "",
    projectNumber: "",
    phoneNumber: "",
    studyChoice: "Brumisation",
    installationPrincipaleChoice: "PVC",
    installationPorteRampeChoice: "PVC"
  };

  const validationSchema = Yup.object({
    date: Yup.date().required("La date est requise"),
    domain: Yup.string().required("Le domaine est requis"),
    location: Yup.string().required("La situation géographique est requise"),
    owner: Yup.string().required("Le propriétaire est requis"),
    tenant: Yup.string().required("Le locataire est requis"),
    totalArea: Yup.number().min(0, "La superficie totale doit être supérieure ou égale à 0").required("La superficie totale est requise"),
    equippedArea: Yup.number().min(0, "La superficie à équiper doit être supérieure ou égale à 0").required("La superficie à équiper est requise"),
    commercial: Yup.string().required("Le commercial est requis"),
    projectNumber: Yup.string().required("Le numéro de dossier est requis"),
    phoneNumber: Yup.string().matches(/^\d{10}$/, "Le numéro de téléphone doit contenir 10 chiffres").required("Le numéro de téléphone est requis"),
    studyChoice: Yup.string().required("Le choix d'étude est requis"),
    installationPorteRampeChoice: Yup.string().required("Le choix d'installation Porte Rampe est requis")
  });

  const handleSubmit = (values) => {
    // Here you can handle the form submission with the form values
    console.log(values);
  };

  return (
    <Formik initialValues={initialValues} validationSchema={validationSchema} onSubmit={handleSubmit}>
        <Form>
          <label>
            Date:
            <Field type="date" name="date" />
            <ErrorMessage name="date" className="error" />
          </label>
          <br />
          <label>
            Domaine:
            <Field type="text" name="domain" />
            <ErrorMessage name="domain" className="error" />
          </label>
          <br />
          <label>
            Situation Géographique:
            <Field type="text" name="location" />
            <ErrorMessage name="location" className="error" />
          </label>
          <br />
          <label>
            Propriétaire:
            <Field type="text" name="owner" />
            <ErrorMessage name="owner" className="error" />
          </label>
          <br />
          <label>
            Locataire:
            <Field type="text" name="tenant" />
            <ErrorMessage name="tenant" className="error" />
          </label>
          <br />
          <label>
            Superficie totale (en ha):
            <Field type="number" name="totalArea" />
            <ErrorMessage name="totalArea" className="error" />
          </label>
          <br />
          <label>
            Superficie à équiper (en ha):
            <Field type="number" name="equippedArea" />
            <ErrorMessage name="equippedArea" className="error" />
          </label>
          <br />
          <label>
          Commercial:
          <Field type="text" name="commercial" />
          <ErrorMessage name="commercial" className="error" />
          </label>
          <br />
          <label>
          N° Dossier:
          <Field type="text" name="projectNumber" />
          <ErrorMessage name="projectNumber" className="error" />
          </label>
          <br />
          <label>
          N° Téléphone:
          <Field type="text" name="phoneNumber" />
          <ErrorMessage name="phoneNumber" className="error" />
          </label>
          <br />
          <label>
          Choix de l'étude:
          <Field as="select" name="studyChoice">
            <option value="Brumisation">Brumisation</option>
            <option value="Irrigation">Irrigation</option>
            <option value="Traitement">Traitement</option>
          </Field>
          </label>
          <br />
          Choix d'installation:
          <label>
           - Principale:
          <Field as="select" name="installationPrincipaleChoice">
            <option value="PVC">PVC</option>
            <option value="PEHD">PEHD</option>
          </Field>
          </label>
          <label>
           - Porte Rampe:
          <Field as="select" name="installationPorteRampeChoice">
            <option value="PVC">PVC</option>
            <option value="PEHD">PEHD</option>
          </Field>
          </label>
         <br />
        <button type="submit">Submit</button>
    </Form>
</Formik>
    )
}
export default FormProject;
                 
        