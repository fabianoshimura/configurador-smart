export default {
  common: {
    yes: 'oui',
    no: 'non',
    wrong: 'Une erreur est survenue',
    none: 'Aucun(e)',
  },
  action: {
    upload: 'Envoyer',
    back: 'Retour',
    backToLogin: "Retour à l'identification",
    signUp: 'Créer un compte',
    signIn: "S'identifier",
    createNew: 'Nouveau',
    create: 'Créer',
    edit: 'Modifier',
    change: 'Changer',
    delete: 'Supprimer',
    rename: 'Renommer',
    add: 'Ajouter',
    makeChoice: 'Choisissez',
    cancel: 'Annuler',
    save: 'Enregistrer',
    retry: 'Réessayer',
    search: 'Chercher',
    copy: 'Copier',
    activate: 'Activer',
    deactivate: 'Désactiver',
  },
  adminType: {
    settings: 'Paramètres',
  },
  applicationType: {
    database: 'Base de données',
    cantSelectTableTitle: 'Impossible de sélectionner la base de données.',
    cantSelectTableDescription:
      'La base de données ne peut pas être sélectionnée car elle ne contient ' +
      "aucune table. Utilisez la bare latérale afin d'en créer une.",
  },
  settingType: {
    account: 'Informations personnelles',
    password: 'Mot de passe',
    tokens: "Jetons d'API",
  },
  userFileUploadType: {
    file: 'de mon appareil',
    url: "d'une URL",
  },
  field: {
    emailAddress: 'Adresse électronique',
  },
  error: {
    invalidEmail: 'Veuillez entrer une adresse électronique valide.',
    notMatchingPassword: 'Les mots de passe ne correspondent pas.',
    minLength: 'Un minimum de {min} caractères sont attendus ici.',
    maxLength: 'Un maximum de {max} caractères sont attendus ici.',
    minMaxLength:
      'Un minimum de {min} et un maximum de {max} caractères sont attendus ici.',
    requiredField: 'Ce champ est requis.',
  },
  permission: {
    admin: 'Admin',
    adminDescription: 'Peut configurer et éditer les groupes et applications.',
    member: 'Membre',
    memberDescription: 'Peut configurer et éditer les applications.',
  },
  fieldType: {
    singleLineText: 'Texte (une ligne)',
    longText: 'Texte long',
    linkToTable: 'Lien vers une table',
    number: 'Nombre',
    rating: 'Classement',
    boolean: 'Booléen',
    date: 'Date',
    lastModified: 'Dernière modification',
    createdOn: 'Date de création',
    url: 'URL',
    email: 'Email',
    file: 'Fichier',
    singleSelect: 'Liste déroulante',
    multipleSelect: 'Selection multiple',
    phoneNumber: 'Téléphone',
    formula: 'Formule',
    lookup: 'Champ rapporté',
  },
  fieldErrors: {
    invalidNumber: 'Nombre invalide',
    maxDigits: '{max} chiffres sont autorisés.',
    invalidUrl: 'URL invalide',
    max254Chars: '254 caractères maximum',
    invalidEmail: 'Adresse email invalide',
    invalidPhoneNumber: 'Num. téléphone invalide',
  },
  fieldDocs: {
    readOnly: 'Ce champ est en lecture seule.',
    text: 'Accepte une seule ligne de texte.',
    longText: 'Accepte un texte multi-ligne.',
    linkRow:
      'Accepte un tableau contenant les identifiants des lignes ' +
      "provenant de la table d'identifiant {table}. Tous les identifiants " +
      'doivent être fournis à chaque fois que les relations sont modifiées. ' +
      'Si une liste vide est fournie, toutes les relations seront supprimées.',
    number: 'Accepte un entier.',
    numberPositive: 'Accepte un entier positive.',
    decimal: 'Accepte un nombre décimal.',
    decimalPositive: 'Accepte un nombre décimal positif.',
    rating: 'Accepte un nombre entier',
    boolean: 'Accepte une valeur booléenne.',
    date: 'Accepte une date au format ISO.',
    dateTime: 'Accepte une date/heure au format ISO.',
    dateResponse: 'La réponse sera une date au format ISO.',
    dateTimeResponse: 'La réponse sera une date/heure au format ISO.',
    lastModifiedReadOnly:
      'La date de modification de la ligne, en lecture seule.',
    createdOnReadOnly: 'La date de modification de la ligne, en lecture seule.',
    url: 'Accepte une URL valide.',
    email: 'Accepte une adresse email valide.',
    file: "Accepte un tableau d'objet contenant au moins le nom du fichier utilisateur.",
    singleSelect:
      "Accepte un entier correspondant à l'identifiant de l'option sélectionnée " +
      'ou nul si vide.',
    multipleSelect:
      "Accepte un tableau d'entier correspondant chacun à l'identifiant " +
      "d'une valeur sélectionnée.",
    phoneNumber:
      "Accepte un numéro de téléphone d'une longueur maximum de 100 caractères " +
      'qui doivent être des chiffres, des espaces ou les caractères suivants : ' +
      'Nx,._+*()#=;/- .',
    formula:
      'Un champ en lecture seule défini par une formule rédigée ' +
      'dans le format spécifique de Baserow.',
    lookup:
      'Un champ en lecture seule associé à un champ de type « lien vers une table » qui retourne un tableau' +
      " de valeurs et d'identifiants de ligne provenant du champ choisi dans la table liée.",
  },
  viewFilter: {
    contains: 'contient',
    containsNot: 'ne contient pas',
    filenameContains: 'nom du fichier contient',
    has: 'a',
    hasNot: "n'a pas",
    higherThan: 'est plus grand que',
    is: 'est',
    isNot: "n'est pas",
    isEmpty: 'est vide',
    isNotEmpty: "n'est pas vide",
    isDate: 'est égal à',
    isDayOfMonth: 'est jour du mois',
    isBeforeDate: 'est avant',
    isAfterDate: 'est après',
    isNotDate: 'est différent de',
    isToday: "est aujourd'hui",
    inThisMonth: 'est ce mois-ci',
    inThisYear: 'est cette année',
    lowerThan: 'est plus petit que',
    lengthIsLowerThan: 'a une longueur inférieure à',
    hasFileType: 'est de type',
  },
  viewType: {
    grid: 'Tableau',
    gallery: 'Galerie',
    form: 'Formulaire',
    sharing: {
      linkName: 'la vue',
      formLinkName: 'le formulaire',
    },
  },
  premium: {
    deactivated: 'Désactivé',
  },
  trashType: {
    group: 'groupe',
    application: 'application',
    table: 'table',
    field: 'champ',
    row: 'ligne',
  },
  webhook: {
    request: 'Requête',
    response: 'Réponse',
    successfullyUpdated: 'Le webhook a été mis à jour.',
    status: {
      noStatus: "PAS D'ÉTAT",
      statusOK: 'OK',
      statusNotOK: 'NON OK',
    },
    eventType: {
      rowCreated: "Création d'une ligne",
      rowUpdated: "Modification d'une ligne",
      rowDeleted: "Suppression d'une ligne",
    },
  },
  clientHandler: {
    notFoundTitle: "L'élément {name} n'a pas été trouvé",
    notFoundDescription:
      "L'élément {name} sélectionné n'a pas été trouvé. Peut-être qu'il a déjà été supprimé.",
    networkErrorTitle: 'Erreur de connection',
    networkErrorDescription:
      'Connection impossible avec le serveur. Veuillez vérifier votre connection.',
    tooManyRequestsTitle: 'Trop de requêtes',
    tooManyRequestsDescription:
      'Vous envoyez trop de requêtes au serveur. Veuillez patienter avant de recommencer.',
    notCompletedTitle: "Échec de l'action",
    notCompletedDescription:
      "L'action n'a pas pu aboutir pour une raison inconnue.",
    userNotInGroupTitle: 'Action interdite',
    userNotInGroupDescription:
      "L'action n'a pas pu aboutir car vous n'êtes pas membre du groupe associé.",
    invalidGroupPermissionsTitle: 'Action interdite',
    invalidGroupPermissionsDescription:
      "L'action n'a pas pu aboutir car vous n'avez pas les permissions nécessaires dans le groupe associé.",
    tableDoesNotExistTitle: "La table n'existe pas",
    tableDoesNotExistDescription:
      "L'action n'a pas pu aboutir car la table concernée n'existe plus.",
    rowDoesNotExistTitle: "La ligne n'existe pas",
    rowDoesNotExistDescription:
      "L'action n'a pas pu aboutir car la ligne concernée n'existe plus",
    fileSizeTooLargeTitle: 'Fichier trop volumineux',
    fileSizeTooLargeDescription: 'Le fichier fourni est trop volumineux.',
    invalidFileTitle: 'Fichier invalide',
    invalidFileDescription: "Le fichier fourni n'est pas un fichier valide.",
    fileUrlCouldNotBeReachedTitle: 'URL invalide',
    fileUrlCouldNotBeReachedDescription: "L'URL fournie n'est pas accessible.",
    invalidFileUrlTitle: 'URL invalide',
    invalidFileUrlDescription:
      "L'URL fournie n'est pas valide ou est protégée.",
    adminCannotDeactivateSelfTitle: 'Action interdite',
    adminCannotDeactivateSelfDescription:
      'Vous ne pouvez pas désactiver votre compte ou modifier votre statut de collaborateur.',
    adminCannotDeleteSelfTitle: 'Action interdite',
    adminCannotDeleteSelfDescription:
      'Vous ne pouvez pas supprimer votre propre compte utilisateur.',
    maxFieldCountExceededTitle: 'Impossible de créer un nouveau champ',
    maxFieldCountExceededDescription:
      "L'action n'a pas pu aboutir car vous avez atteint le nombre maximum de champ pour cette table.",
    cannotRestoreParentBeforeChildTitle:
      "Veuillez restaurer l'élément parent d'abord",
    cannotRestoreParentBeforeChildDescription:
      "Vous ne pouvez pas restaurer cet élément car il dépend d'un autre élément supprimé. Vous devez restaurer l'élément parent avant de pouvoir restaurer cet élément",
    groupUserIsLastAdminTitle: 'Impossible de quitter le groupe',
    groupUserIsLastAdminDescription:
      "Il est impossible de quitter ce groupe car vous en êtes le dernier administrateur. Veuillez supprimer le groupe ou donner les droits d'administration à un autre utilisateur.",
  },
  importerType: {
    csv: 'Importer un fichier CSV',
    paste: 'Coller des données tabulaires',
    xml: 'Importer un fichier XML',
    json: 'Importer un fichier JSON',
  },
  apiDocs: {
    intro: 'Introduction',
    authent: 'Authentification',
    table: 'Table {name}',
    filters: 'Filtres',
    errors: 'Erreurs HTTP',
    fields: 'Champs',
    listFields: 'Lister les champs',
    listRows: 'Lister les lignes',
    getRow: 'Lire une ligne',
    createRow: 'Créer une ligne',
    updateRow: 'Modifier une ligne',
    moveRow: 'Déplacer une ligne',
    deleteRow: 'Supprimer une ligne',
    queryParameters: 'Paramètres de requête',
    pathParameters: "Paramètres d'URL",
    requestBodySchema: 'Schéma du corps de la requête',
    userFieldNamesDescription:
      'Quand une valeur est définie pour le paramètre GET `user_field_names`, ' +
      "les noms de champs retournés par ce point d'accès seront les noms définis par l'utilisateur." +
      "\n\n Si le paramètre `user_field_names` n'est pas fourni, alors le nom des champs sera " +
      " `field_` suivi par l'identifiant du champ. Par example `field_1` fait référence au champ avec l'identifiant `1`.",
  },
  exporterType: {
    csv: 'Exporter vers CSV',
  },
  previewType: {
    imageBrowser: 'Ouvrir dans le navigateur',
    videoBrowser: 'Ouvrir dans le navigateur',
    AudioBrowser: 'Ouvrer dans le navigateur',
    pdfBrowser: 'Ouvrir dans le navigateur',
    googleDocs: 'Ouvrir dans Google Docs',
  },
  humanDateFormat: {
    'dd/mm/yyyy': 'jj/mm/aaaa',
    'mm/dd/yyyy': 'mm/jj/aaaa',
    'yyyy-mm-dd': 'aaaa-mm-jj',
  },
  formulaFunctions: {
    upperDescription: "Retourne l'argument en MAJUSCULES.",
    lowerDescription: "Retourne l'argument en minuscules.",
    concatDescription:
      'Retourne ses arguments concaténés ensemble en une seule chaîne.',
    addDescription: "Retourne le résultat de l'addition de ses deux arguments.",
    minusDescription:
      'Retourne le résultat de la soustraction du premier argument par le second.',
    multiplyDescription:
      'Retourne le résultat de la multiplication de ses deux arguments.',
    divideDescription:
      'Retourne le résultat de la division du premier argument par le second.',
    equalDescription: 'Retourne vrai si ses deux arguments sont égaux.',
    ifDescription:
      "Si le premier argument est évalué à 'vrai' alors retourne le second argument, sinon retourne le troisième argument.",
    toTextDescription: "Convertit l'argument en texte.",
    datetimeFormatDescription:
      'Convertit la date en texte en fonction de la façon dont elle est formatée.',
    toNumberDescription: "Convertit l'argument en nombre si cela est possible.",
    fieldDescription: 'Retourne le champ désigné par le nom en argument.',
    lookupDescription:
      "Rapporte la valeur d'un champ d'une autre table. Le premier argument doit être le nom d'un champ de lien de la table courante vers une autre table et le second argument doit être le nom d'un champ dans la table liée.",
    isBlankDescription:
      "Retourne vrai si l'argument est vide ou nul sinon retourne faux.",
    tDescription:
      "Retourne l'argument si c'est un texte et une chaîne vide autrement.",
    notDescription: "Retourne faux si l'argument est vrai, vrai sinon.",
    greaterThanDescription:
      'Retourne vrai si le premier argument et strictement supérieur au second.',
    greaterThanOrEqualDescription:
      'Retourne vrai si le premier argument est supérieur ou égal au second.',
    lessThanDescription:
      'Retourne vrai si le premier argument et strictement inférieur au second.',
    lessThanOrEqualDescription:
      'Retourne vrai si le premier argument et inférieur ou égal au second.',
    toDateDescription:
      'Retourne le premier argument converti en date selon le format définit en second argument.',
    dayDescription:
      "Retourne le jour de la date en argument en tant qu'entier compris entre 1 et 31.",
    dateDiffDescription:
      "Étant donné l'unité de mesure définit par le premier argument ('year', 'month', 'week', 'day', 'hour', 'minute', 'seconds') calcule et retourne le nombre d'unité pour aller du second argument au troisième.",
    andDescription:
      'Retourne le ET logique entre le premier et le second argument. Si les deux arguments sont vrais alors le résultat est vrai, sinon le résultat est faux.',
    orDescription:
      'Retourne le OU logique entre le premier et le second argument. Si au moins un des argument est vrai alors le résultat est vrai, sinon le résultat est faux.',
    dateIntervalDescription:
      "Retourne l'interval de date correspondant à l'argument fourni.",
    replaceDescription:
      'Remplace toutes les occurrences du second argument dans le premier argument par le troisième argument.',
    searchDescription:
      "Retourne un entier positif supérieur ou égal à 1 représentant la position de la première occurrence du second argument dans le premier ou 0 si aucune occurrence n'est trouvée.",
    rowIdDescription: "Retourne l'identifiant unique de la ligne.",
    lengthDescription: "Retourne le nombre de caractère de l'argument.",
    reverseDescription: "Retourne le texte en argument à l'envers.",
    notEqualDescription:
      'Retourne vrai si les deux arguments ont des valeurs différentes.',
    countDescription: "Retourne le nombre d'élément de son argument.",
    containsDescription:
      'Retourne vrai si le premier argument contient au moins une fois le second.',
    leftDescription:
      "Permet d'extraire le nombre de caractères définit en second argument du premier argument en partant de la gauche.",
    rightDescription:
      "Permet d'extraire le nombre de caractères définit en second argument du premier argument en partant de la droite.",
    trimDescription:
      "Supprime tous les caractères 'espace' au début et à la fin de la chaîne en argument",
    regexReplaceDescription:
      "Remplace le texte du premier argument s'il correspond à l'expression régulière en second argument avec le texte en troisième argument.",
    greatestDescription: 'Retourne le plus grand des deux arguments.',
    leastDescription: 'Retourne le plus petit des deux arguments.',
    monthDescription:
      'Retourne le nombre correspondant au mois de la date en argument.',
    yearDescription: "Retourne l'année de la date en argument.",
    secondDescription: 'Retourne le nombre de secondes de la date en argument.',
    whenEmptyDescription:
      "Si le premier argument est vide le second est retourné, sinon c'est le premier que est retourné.",
    anyDescription:
      'Retourne vrai si au moins une des valeurs en argument est vraie et faux si elles sont toutes fausses.',
    everyDescription:
      'Retourne vrai si toutes les valeurs en argument sont vraies et faux sinon.',
    maxDescription: 'Retourne la plus grande des valeurs en argument.',
    minDescription: 'Retourne la plus petite des valeurs en argument.',
    joinDescription:
      'Concatène toutes les valeurs du premier argument en les séparant par le second argument.',
    stddevPopDescription:
      "Calcule l'écart-type (standard deviation) de l'ensemble de la population des valeurs en argument et retourne le résultat. Cette fonction peut être utilisée uniquement quand les arguments fournis contiennent une valeur pour l'ensemble de la population.",
    stddevSampleDescription:
      "Calcule l'écart-type (standard deviation) du sous ensemble des valeurs en argument et retourne le résultat. Cette fonction peut être utilisée quand les arguments fournis contiennent une valeur uniquement pour un sous ensemble de la population.",
    variancePopDescription:
      "Calcule la variance des valeurs en argument et retourne le résultat. Cette fonction peut être utilisée uniquement quand tous les arguments fournis contiennent une valeur pour l'ensemble de la population.",
    varianceSampleDescription:
      'Calcule la variance des valeurs en argument et retourne le résultat. Cette fonction peut être utilisée quand les arguments fournis contiennent une valeur uniquement pour un sous ensemble de la population.',
    avgDescription:
      'Calcule la moyenne de toutes les valeurs et retourne le résultat.',
    sumDescription:
      'Retourne la somme de toutes les valeurs en argument et retourne le résultat.',
    filterDescription:
      'Filtre une expression impliquant un champ rapporté,un champ lien vers une table ou un appel de la fonction lookup.',
  },
  functionnalGridViewFieldLinkRow: {
    unnamed: 'Ligne sans nom {value}',
  },
}
