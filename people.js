const people = {
	'Jeff Seaman':         {
		name:       'Jeff Seaman',
		title:      'Corporate Executive Officer',
		department: 'Rooms To Go',
		team:       'RTG',
		phone:      'xxxx',
		location:   'Seffner, FL',
		directs:    [
			'Eyal Rappaport', 'Janis Altshuler', 'Peter Weitzner', 'Mitch Allen', 'Randi Schnell', 'Rob Crigler'
		]
	},
	'Eyal Rappaport':      {
		name:       'Eyal Rappaport',
		title:      'President',
		department: 'Rooms To Go',
		team:       'RTG',
		phone:      'xxxx',
		location:   'Atlanta, GA',
		directs:    [

			'Russ Rosen',
			'Katie Hatch',
			'Ed Biard',
			'Jesse Kreinbrink',
			'Sara Davoudi',
			'Michelle Boyea',
			'Pat Stern',
			'Chris Hunt',
			'Tom Maldonado',
			'David Bennett',
			'Jahnu Rodriguez',
			'Jamie Sheer',
			'Krystyn Marchese'

		]
	},
	'Peter Weitzner':      {
		name:       'Peter Weitzner',
		title:      '',
		department: 'Legal',
		team:       '',
		phone:      'xxxx',
		location:   'Atlanta, GA',
		directs:    []
	},
	'Randi Schnell':       {
		name:       'Randi Schnell',
		title:      '',
		department: 'Legal',
		team:       '',
		phone:      'xxxx',
		location:   'Atlanta, GA',
		directs:    ["Chad Lennon", "Melissa Tillitski", "Kendyl Tash"]
	},
	'Mitch Allen':         {
		name:       'Mitch Allen',
		title:      '',
		department: 'Legal',
		team:       '',
		phone:      'xxxx',
		location:   'Atlanta, GA',
		directs:    [
			"Nancy Chad",
			"Patrick Cantrell",
			"William Benefield",
			"Jayson Sobhani",
			"Philip Cochran"
		]
	},
	'Michelle Boyea':         {
		name:       'Michelle Boyea',
		title:      '',
		department: 'Legal',
		team:       '',
		phone:      'xxxx',
		location:   'Atlanta, GA',
		directs:    [

			"Susie McBride",
			"Mike Shenefield",
			"Tiffany Venturino",
			"Gabriella Chiovarelli"
		]
	},
	'Russ Rosen':          {
		name:       'Russ Rosen',
		title:      'CIO',
		department: 'Technology',
		team:       '',
		phone:      'xxxx',
		location:   'Atlanta, GA',
		directs:    ['Clark Godwin', 'Mike Austin', 'Ramses Veloso']
	},
	'Mike Austin':         {
		name:       'Mike Austin',
		title:      'VP of eCommerce Operations',
		department: '',
		team:       '',
		phone:      'xxxx',
		location:   'Seffner, FL',
		directs:    ['Nathan Ell', 'Venkat Ravi', 'Stephen Clark', 'Sheila Bersanetti', 'Imran Sabir', 'Naveen Mahankali']
	},
	'Nathan Ell':          {
		name:       'Venkat Ravi',
		title:      '',
		department: 'Dot Com',
		team:       'Infrastructure',
		phone:      'xxxx',
		location:   'Seffner, FL',
		directs:    []
	},
	'Stephen Clark':       {
		name:       'Stephen Clark',
		title:      '',
		department: 'eCommerce Operations',
		team:       '',
		phone:      'xxxx',
		location:   'Seffner, FL',
		directs:    []
	},
	'Sheila Bersanetti':   {
		name:       'Sheila Bersanetti',
		title:      '',
		department: 'eCommerce Operations',
		team:       '',
		phone:      'xxxx',
		location:   'Seffner, FL',
		directs:    ['Heather Dryer']
	},
	'Imran Sabir':         {
		name:       'Imran Sabir',
		title:      '',
		department: 'eCommerce Operations',
		team:       '',
		phone:      'xxxx',
		location:   'Seffner, FL',
		directs:    []
	},
	'Heather Dryer':       {
		name:       'Heather Dryer',
		title:      '',
		department: 'eCommerce Operations',
		team:       '',
		phone:      'xxxx',
		location:   'Seffner, FL',
		directs:    []
	},
	'Ramses Veloso':       {
		name:       'Ramses Veloso',
		title:      'CISO/VP of Infrastructure & Engineering',
		department: 'eCommerce Operations',
		team:       '',
		phone:      'xxxx',
		location:   'Seffner, FL',
		directs:    ['Gary Bullock']
	},
	'Gary Bullock':        {
		name:       'Gary Bullock',
		title:      '',
		department: 'eCommerce Operations',
		team:       '',
		phone:      'xxxx',
		location:   'Seffner, FL',
		directs:    []
	},
	'Naveen Mahankali':    {
		name:       'Naveen Mahankali',
		title:      '',
		department: 'eCommerce Operations',
		team:       '',
		phone:      'xxxx',
		location:   'Seffner, FL',
		directs:    ['Vu Cao', 'Sarma Challa']
	},
	'Sarma Challa':        {
		name:       'Sarma Challa',
		title:      '',
		department: 'eCommerce Operations',
		team:       '',
		phone:      'xxxx',
		location:   'Seffner, FL',
		directs:    []
	},
	'Mike':                {
		name:       'Mike',
		title:      '',
		department: 'eCommerce Operations',
		team:       '',
		phone:      'xxxx',
		location:   'Seffner, FL',
		directs:    []
	},
	'Clark Godwin':        {
		name:       'Clark Godwin',
		title:      '',
		department: '',
		team:       '',
		phone:      'xxxx',
		location:   'Atlanta, GA',
		directs:    ['Todd Daniell', 'Andrew Smith']
	},
	'Todd Daniell':        {
		name:       'Todd Daniell',
		title:      'Director of Database and BI',
		department: '',
		team:       '',
		phone:      'xxxx',
		location:   'Atlanta, GA',
		directs:    ['Nathan Sundararajan', 'Monty Williamson']
	},
	'Nathan Sundararajan': {
		name:       'Nathan Sundararajan',
		title:      'Senior BI Developer',
		department: '',
		team:       '',
		phone:      'xxxx',
		location:   'Atlanta, GA',
		directs:    []
	},
	'Monty Williamson':    {
		name:       'Monty Williamson',
		title:      'Senior BI Developer',
		department: '',
		team:       '',
		phone:      'xxxx',
		location:   'Atlanta, GA',
		directs:    []
	},
	'Andrew Smith':        {
		name:       'Andrew Smith',
		title:      '',
		department: '',
		team:       '',
		phone:      'xxxx',
		location:   'Atlanta, GA',
		directs:    ['John Leese', 'Tariq Abuzaghleh']
	},
	'John Leese':          {
		name:       'John Leese',
		title:      '',
		department: '',
		team:       '',
		phone:      'xxxx',
		location:   'Atlanta, GA',
		directs:    []
	},
	'Katie Hatch':         {
		name:       'Katie Hatch',
		title:      '',
		department: '',
		team:       '',
		phone:      'xxxx',
		location:   'Atlanta, GA',
		directs:    []
	},
	'Janis Altshuler':     {
		name:       'Janis Altshuler',
		title:      '',
		department: 'E-Commerce',
		team:       '',
		phone:      'xxxx',
		location:   'Atlanta, GA',
		directs:    ['Ted Simon', 'Suzanne Tschop', 'Tara Green', 'Nick Pallutto', 'Jillian Leger']
	},
	'Nick Pallutto':       {
		name:       'Nick Pallutto',
		title:      '',
		department: 'E-Commerce',
		team:       '',
		phone:      'xxxx',
		location:   'Atlanta, GA',
		directs:    ['Nekhena Campbell']
	},
	'Nekhena Campbell':    {
		name:       'Nekhena Campbell',
		title:      '',
		department: 'E-Commerce',
		team:       '',
		phone:      'xxxx',
		location:   'Atlanta, GA',
		directs:    ['Nekhena Campbell']
	},
	'Jillian Leger':       {
		name:       'Jillian Leger',
		title:      '',
		department: 'E-Commerce',
		team:       '',
		phone:      'xxxx',
		location:   'Atlanta, GA',
		directs:    []
	},
	'Tara Green':          {
		name:       'Tara Green',
		title:      '',
		department: 'E-Commerce',
		team:       '',
		phone:      'xxxx',
		location:   'Atlanta, GA',
		directs:    ['Ryan Short', 'Clair Owens', 'xxxZoara Christman']
	},
	'Zoara Christman':     {
		name:       'Zoara Christman',
		title:      '',
		department: 'E-Commerce',
		team:       '',
		phone:      'xxxx',
		location:   'Atlanta, GA',
		directs:    []
	},
	'Ryan Short':          {
		name:       'Ryan Short',
		title:      '',
		department: 'E-Commerce',
		team:       '',
		phone:      'xxxx',
		location:   'Atlanta, GA',
		directs:    []
	},
	'Clair Owens':         {
		name:       'Clair Owens',
		title:      '',
		department: 'E-Commerce',
		team:       '',
		phone:      'xxxx',
		location:   'Atlanta, GA',
		directs:    []
	},
	'Suzanne Tschop':      {
		name:       'Suzanne Tschop',
		title:      '',
		department: 'E-Commerce',
		team:       '',
		phone:      'xxxx',
		location:   'Atlanta, GA',
		directs:    []
	},
	'Tara':                {
		name:       'Tara',
		title:      '',
		department: 'E-Commerce',
		team:       '',
		phone:      'xxxx',
		location:   'Atlanta, GA',
		directs:    []
	},
	'Rob Crigler':         {
		name:       'Rob Crigler',
		title:      'Digital Marketing Exec',
		department: 'Digital Marketing',
		team:       'Digital',
		phone:      'xxxx',
		location:   'Atlanta',
		directs:    [
			'Aditya Sunchu',
			'Daryl Ohrt',
			'Fred Stuk',
			'Jennifer Paucke',
			'Michael Knottek',
			'xxxDenisse Gomez'
		]
	},
	'Nadya Smolskaya':     {
		name:       'Nadya Smolskaya',
		title:      '',
		department: 'Digital Marketing',
		team:       'Analytics Operations',
		phone:      'xxxx',
		location:   'Atlanta',
		directs:    []
	},
	'Fred Stuk':           {
		name:       'Fred Stuk',
		title:      'Director Digital Operations',
		department: 'Digital Marketing',
		team:       'Analytics Operations',
		phone:      'xxxx',
		location:   'Atlanta',
		directs:    ['Igor Vladimirovskiy', 'Matthew Schnell', 'Christopher Ellis', 'Brian Donegan']
	},

	'Daryl Ohrt': {
		name:       'Daryl Ohrt',
		title:      'Experience Designer',
		department: 'Digital Marketing',
		team:       'UX',
		phone:      '',
		location:   'Atlanta',
		directs:    ['Brianne Hebert']
	},

	'Brian Donegan': {
		name:       'Brian Donegan',
		title:      'Director',
		department: 'Digital Marketing',
		team:       'Analytics',
		phone:      'xxxx',
		location:   'Atlanta',
		directs:    []
	},

	'Christopher Ellis': {
		name:       'Christopher Ellis',
		title:      'Digital Marketing',
		department: 'Marketing',
		team:       'Analytics',
		phone:      'xxxx',
		location:   'Atlanta',
		directs:    []
	},

	'Igor Vladimirovskiy': {
		name:       'Igor Vladimirovskiy',
		title:      'Director of Digital Media Performance',
		department: 'Marketing',
		team:       'Analytics',
		phone:      'xxxx',
		location:   'Atlanta',
		directs:    []
	},

	'Matthew Schnell': {
		name:       'Matthew Schnell',
		title:      'Marketing Intern',
		department: 'Marketing',
		team:       'Digital',
		phone:      'xxxx',
		location:   'Atlanta',
		directs:    []
	},

	'Aditya Sunchu': {
		name:       'Aditya Sunchu',
		title:      'Director Marketing Technology',
		department: 'Dot Com',
		team:       'Digital',
		phone:      '678-628-0761',
		location:   'Atlanta',
		directs:    [
			'Guido Van Verseveld',
			'Josh Starrett',
			'John Fullbright',
			'Noah Kronemeyer',
			'Leon Jones',
			'Quincy Acklen'
		]

	},

	'Noah Kronemeyer': {
		name:       'Noah Kronemeyer',
		title:      'Front End Dev Manager',
		department: 'Dot Com',
		team:       'Front End',
		phone:      '',
		location:   'Atlanta',
		directs:    [
			'Casey Jardin',
			'Mason Tavakoli',
			'Matt Polini',
			'Michael Coleman',
			'Steevensen Chery',
			'Tyler Harnach'
		]
	},

	'Keith Kluksdahl': {
		name:       'Keith Kluksdahl',
		title:      'Engineer at-large',
		department: 'Dot Com',
		team:       'Operations',
		phone:      '404-451-7887',
		location:   'Atlanta',
		directs:    []
	},

	'Leon Jones':          {
		name:       'Leon Jones',
		title:      'Lead Back-end Developer',
		department: 'Dot Com',
		team:       'Back End',
		phone:      '478-718-2433',
		location:   'Atlanta',
		directs:    ['Anina Mu', 'Chawalit Saetiew', 'Deepan Chakravarthy', 'Kath Delgado', 'Subodh Kerkar']
	},
	'Chawalit Saetiew':    {
		name:       'Chawalit Saetiew',
		title:      'Back-end Developer',
		department: 'Dot Com',
		team:       'Back End',
		phone:      '706-714-4167',
		location:   'Atlanta',
		directs:    []
	},
	'Subodh Kerkar':       {
		name:       'Subodh Kerkar',
		title:      'Back-end Developer',
		department: 'Dot Com',
		team:       'Back End',
		phone:      '813-300-4710',
		location:   'Seffner',
		directs:    []
	},
	'Anina Mu':            {
		name:       'Anina Mu',
		title:      'Back-end Developer',
		department: 'Dot Com',
		team:       'Back End',
		phone:      'xxxx',
		location:   'Atlanta',
		directs:    []
	},
	'Deepan Chakravarthy': {
		name:       'Deepan Chakravarthy',
		title:      'Back-end Developer',
		department: 'Dot Com',
		team:       'Back End',
		phone:      '913-633-8986',
		location:   'Atlanta',
		directs:    []
	},
	'Kath Delgado':        {
		name:       'Kath Delgado',
		title:      'Mobile App Engineer',
		department: 'Dot Com',
		team:       'Mobile',
		phone:      '904-803-7492',
		location:   'Atlanta',
		directs:    []
	},

	'Mohansundaram Radhakannan': {
		name:       'Mo Radhakannan',
		title:      'Project Manager ',
		department: 'Dot Com',
		team:       'Project Management & Reporting Analytics',
		phone:      '980-875-0073',
		location:   'Atlanta',
		directs:    []
	},

	'Bruno Bronosky': {
		name:       'Bruno Bronosky',
		title:      'Lead Infrastructure Architect',
		department: 'Dot Com',
		team:       'Infrastructure',
		phone:      '404-992-7866',
		location:   'Atlanta',
		directs:    []
	},
	'Venkat Ravi':    {
		name:       'Venkat Ravi',
		title:      'Network Engineer',
		department: 'Dot Com',
		team:       'Infrastructure',
		phone:      '847-691-0745',
		location:   'Seffner',
		directs:    []
	}, 'Open3':       {
		name:       'Open',
		title:      'AWS Architect',
		department: 'Dot Com',
		team:       'Digital',
		phone:      'xxxx',
		location:   'Atlanta',
		directs:    []
	},
	'Sindhuja Aitha': {
		name:       'Sindhuja Aitha',
		title:      'Cloud Operations Engineer',
		department: 'Dot Com',
		team:       'Infrastructure',
		phone:      '470-338-0646',
		location:   'Atlanta',
		directs:    []
	},

	'Brian Kelley': {
		name:       'Brian Kelley',
		title:      'Cloud Operations Engineer',
		department: 'Dot Com',
		team:       'Digital',
		phone:      '478-396-8036',
		location:   'Atlanta',
		directs:    []
	},

	'Chris Queen': {
		name:       'Chris Queen',
		title:      'Front End Software Engineer',
		department: 'Dot Com',
		team:       'Digital',
		phone:      '404-414-5756',
		location:   'Atlanta',
		directs:    []
	},

	'Hani Momin': {
		name:       'Hani Momin',
		title:      'Cloud Operations',
		department: 'Dot Com',
		team:       'Infrastructure',
		phone:      '404-944-7861',
		location:   'Atlanta',
		directs:    []
	},

	'Bryan Hadden': {
		name:       'Bryan Hadden',
		title:      'Front End Developer',
		department: 'Dot Com',
		team:       'Cloud Infrastructure',
		phone:      '404-909-7287',
		location:   'Atlanta',
		directs:    []
	},

	'Joseph Thompson': {
		name:       'Joseph Thompson',
		title:      'Front End Developer',
		department: 'Dot Com',
		team:       'Digital',
		phone:      '678-943-3920',
		location:   'Atlanta',
		directs:    []
	},

	'Jennifer Paucke':     {
		name:       'Jennifer Paucke',
		title:      'Director of Digital Experience',
		department: 'Digital Marketing',
		team:       'Digital',
		phone:      'xxxx',
		location:   'Atlanta',
		directs:    ['Corey Richards', 'Mary Lauren Bagwell', 'xxxxStephanie Brown', 'Steve Chandler']
	},
	'Stephanie Brown':     {
		name:       'Stephanie Brown',
		title:      'Digital Marketing Project Manager',
		department: 'Digital Marketing',
		phone:      'xxxx',
		location:   'Atlanta, GA',
		directs:    []
	},
	'Mary Lauren Bagwell': {
		name:       'Mary Lauren Bagwell',
		title:      'Sr. Digital Merchandising Manager',
		department: 'Digital Marketing',
		phone:      'xxxx',
		location:   'Atlanta, GA',
		directs:    ['Lamide Adewole']
	},
	'Steve Chandler':      {
		name:       'Steve Chandler',
		title:      'Digital Art Director',
		department: 'Digital Marketing',
		phone:      'xxxx',
		location:   'Atlanta, GA',
		directs:    ['Madison Betsill', 'Claire Needle']
	},
	'Claire Needle':       {
		name:       'Claire Needle',
		title:      'Digital Designer',
		department: 'Digital Marketing',
		phone:      'xxxx',
		location:   'Atlanta, GA',
		directs:    []
	},
	'Madison Betsill':     {
		name:       'Madison Betsill',
		title:      'Lead Digital Designer',
		department: 'Digital Marketing',
		phone:      'xxxx',
		location:   'Atlanta, GA',
		directs:    []
	},
	'Lamide Adewole':      {
		name:       'Lamide Adewole',
		title:      'Digital Merchandising Specialist',
		department: 'Digital Marketing',
		phone:      'xxxx',
		location:   'Atlanta, GA',
		directs:    []
	},
	'Corey Richards':      {
		name:       'Corey Richards',
		title:      'Digital Content Manager',
		department: 'Digital Marketing',
		phone:      'xxxx',
		location:   'Atlanta, GA',
		directs:    ['Matin Asghari']
	},
	'Matin Asghari':       {
		name:       'Matin Asghari',
		title:      'Content Specialist',
		department: 'Digital Marketing',
		phone:      'xxxx',
		location:   'Atlanta, GA',
		directs:    []
	},
	'Rachel Seiden':       {
		name:       'Rachel Seiden',
		title:      '',
		department: 'Digital Marketing',
		phone:      'xxxx',
		location:   'Atlanta, GA',
		directs:    []
	},
	'Tariq Abuzaghleh':    {
		name:       'Tariq Abuzaghleh',
		title:      '',
		department: '',
		phone:      'xxxx',
		location:   'Atlanta, GA',
		directs:    []
	},
	'Meg':                 {
		name:       'Meg',
		title:      '',
		department: 'Digital Marketing',
		phone:      'xxxx',
		location:   'Atlanta, GA',
		directs:    []
	},

	'Michael Knottek':     {
		name:       'Michael Knottek',
		title:      'Director of Digital Media',
		department: 'Marketing',
		team:       'Digital',
		phone:      'xxxx',
		location:   'Atlanta',
		directs:    ['Layla Diep', 'Rachel Seiden']
	},
	'Kimberly Zdanowicz':  {
		name:       'Kimberly Zdanowicz',
		title:      'Digital Media',
		department: 'Marketing',
		team:       'Digital',
		phone:      '',
		location:   'Atlanta',
		directs:    ['Layla Diep', 'Rachel Seiden']
	},
	'Layla Diep':          {
		name:       'Layla Diep',
		title:      ' ',
		department: 'Marketing',
		team:       'Digital',
		phone:      'xxxx',
		location:   'Atlanta',
		directs:    []
	},
	'Denisse Gomez':       {
		name:       'Denisse Gomez',
		title:      'Analytics & User Experience',
		department: 'Marketing',
		team:       'Digital',
		phone:      'xxxx',
		location:   'Atlanta',
		directs:    []
	},
	'Guido Van Verseveld': {
		name:       'Guido Van Verseveld',
		title:      'Data Integration Architect',
		department: 'Dot Com',
		team:       'Data',
		phone:      '404-432-0809',
		location:   'Atlanta',
		directs:    ['Alonso Rigg', 'Praveen Thampi', 'Santhu Bala']
	},
	'Quincy Acklen':       {
		name:       'Quincy Acklen',
		title:      'Sr Technology Manager',
		department: 'Dot Com',
		team:       'Program Mangement',
		phone:      '704-916-9610',
		location:   'Atlanta',
		directs:    ['Keith Kluksdahl', 'Pamela Peacock', 'Richard Hughes', 'Schaquana Bates', 'Tim Jones']
	},
	'Santhu Bala':         {
		name:       'Santhu Bala',
		title:      'Data Integration Developer',
		department: 'Dot Com',
		team:       'Data',
		phone:      '678-982-9020',
		location:   'Atlanta',
		directs:    []
	},
	'Praveen Thampi':      {
		name:       'Praveen Thampi',
		title:      'Data Integration Architect',
		department: 'Dot Com',
		team:       'Data',
		phone:      '404-747-6871',
		location:   'Atlanta',
		directs:    []
	},
	'John Fullbright':     {
		name:       'John Fullbright',
		title:      'Data Integration Developer',
		department: 'Dot Com',
		team:       'Infrastructure',
		phone:      '',
		location:   'Atlanta',
		directs:    ['Sindhuja Aitha', 'Hani Momin', 'Venkat Ravi', 'Bruno Bronosky']

	},
	'Alonso Rigg':         {
		name:       'Alonso Rigg',
		title:      'Data Integration Developer',
		department: 'Dot Com',
		team:       'Data',
		phone:      '',
		location:   'Atlanta',
		directs:    []
	},
	'Richard Hughes':      {
		name:       'Richard Hughes',
		title:      'Product Manager',
		department: 'Dot Com',
		team:       'Project Management',
		phone:      '678-416-2451',
		location:   'Atlanta',
		directs:    []
	},
	'Pamela Peacock':      {
		name:       'Pamela Peacock',
		title:      'Project Manager',
		department: 'Dot Com',
		team:       'Project Management',
		phone:      '404-213-8671',
		location:   'Atlanta',
		directs:    []
	},
	'Schaquana Bates':     {
		name:       'Schaquana Bates',
		title:      'Project Manager',
		department: 'Dot Com',
		team:       'Project Management',
		phone:      '469-867-8740',
		location:   'Atlanta',
		directs:    []
	},
	'Meghna Singh':        {
		name:       'Meghna Singh',
		title:      'Product Manager',
		department: 'Dot Com',
		team:       'Project Management',
		phone:      '615-260-1656',
		location:   'Atlanta',
		directs:    []
	},
	'Brianne Hebert':      {
		name:       'Brianne Hebert',
		title:      'Product Manager',
		department: 'Digital Marketing',
		team:       'UX',
		phone:      '813-380-6796',
		location:   'Atlanta',
		directs:    []
	},
	'Tim Jones':           {
		name:       'Tim Jones',
		title:      'Operations Engineer',
		department: 'Dot Com',
		team:       'Operations Support',
		phone:      '404-202-3700',
		location:   'Atlanta',
		directs:    []
	},
	'Josh Starrett':       {
		name:       'Josh Starrett',
		title:      'Lead QA Engineer',
		department: 'Dot Com',
		team:       'QA',
		phone:      '678-628-7565',
		location:   'Atlanta',
		directs:    ['Asweej Venigalla', 'Lukas Deutz', 'Mike Nguyen', 'Mitchell Haas', "Sandra Amedome", 'Venu Yerra']
	},
	'Mike Nguyen':         {
		name:       'Mike Nguyen',
		title:      'Automation Engineer',
		department: 'Dot Com',
		team:       'QA',
		phone:      '770-241-5844',
		location:   'Atlanta',
		directs:    []
	},
	'Lukas Deutz':         {
		name:       'Lukas Deutz',
		title:      'DevOps Engineer',
		department: 'Dot Com',
		team:       'QA?',
		phone:      '',
		location:   'Atlanta',
		directs:    []
	},
	'Venu Yerra':          {
		name:       'Venu Yerra',
		title:      'Manual Tester',
		department: 'Dot Com',
		team:       'QA',
		phone:      '678 848 0727',
		location:   'Seffner',
		directs:    []
	},
	'Asweej Venigalla':    {
		name:       'AJ Venigalla',
		title:      'Manual Tester',
		department: 'Dot Com',
		team:       'QA',
		phone:      '571-425-3428',
		location:   'Seffner',
		directs:    []
	},
	'Sandra Amedome':      {
		name:       'Sandra Amedome',
		title:      'Manual Tester',
		department: 'Dot Com',
		team:       'QA',
		phone:      '',
		location:   'Atlanta',
		directs:    []
	},
	'Open1':               {
		name:       'Open',
		title:      'SDET',
		department: 'Dot Com',
		team:       'Digital',
		phone:      'xxxx',
		phone:      'xxxx',
		location:   'Atlanta',
		directs:    []
	},
	'Open2':               {
		name:       'Open',
		title:      'Manual Tester',
		department: 'Dot Com',
		team:       'Digital',
		phone:      'xxxx',
		location:   'Atlanta',
		directs:    []
	},
	'Mitchell Haas':       {
		name:       'Mitchell Haas',
		title:      'Manual Tester',
		department: 'Dot Com',
		team:       'QA',
		phone:      '770-380-9274',
		location:   'Atlanta',
		directs:    []
	},

	'Steevensen Chery': {
		name:       'Steevensen Chery',
		title:      'Front End Developer',
		department: 'Dot Com',
		team:       'Front End',
		phone:      '305-761-0070',
		location:   'Seffner',
		directs:    []
	},
	'Michael Coleman':  {
		name:       'Michael Coleman',
		title:      'Front End Developer',
		department: 'Dot Com',
		team:       'Front End',
		phone:      '352-246-5073',
		location:   'Seffner',
		directs:    []
	},

	'Tyler Harnach': {
		name:       'Tyler Harnach',
		title:      'Front End Developer',
		department: 'Dot Com',
		team:       'Front End',
		phone:      '205-746-7516',
		location:   'Atlanta',
		directs:    []
	},

	'Casey Jardin': {
		name:       'Casey Jardin',
		title:      'Front End Developer',
		department: 'Dot Com',
		team:       'Front End',
		phone:      '',
		location:   'Atlanta',
		directs:    []
	},

	'Matt Polini': {
		name:       'Matt Polini',
		title:      'Front End Developer',
		department: 'Dot Com',
		team:       'Front End',
		phone:      '',
		location:   'Atlanta',
		directs:    []
	},

	'Mason Tavakoli': {
		name:       'Mason Tavakoli',
		title:      'Front End Designer',
		department: 'Dot Com',
		team:       'Front End',
		phone:      '',
		location:   'Atlanta',
		directs:    []
	},
	'Benjamin Gray':  {
		name:       'Benjamin Gray',
		title:      'Front End Lead',
		department: 'Dot Com',
		team:       'Front End',
		phone:      '404-775-4539',
		location:   'Atlanta',
		directs:    [
			'Chris Queen',
			'Michael Coleman',
			'Joseph Thompson',
			'Steevensen Chery',
			'Tyler Harnach',
			'Daniel Alamo'
		]
	}
};
