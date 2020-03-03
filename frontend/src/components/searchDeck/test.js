const [people, setPeople] = useState([]);
const [subjectResults, setSubjectResults] = useState([]);
const [subcategories, setSubcategories] = useState([]);

/**
 * users
 */
setPeople(query.createdBy);

/**
 * subject
 */
setSubjectResults(query.subject);

/**
 * subcategories
 */
setSubcategories(query.tags);

