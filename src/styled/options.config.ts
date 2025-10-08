
export const OPTIONS_ICON_LIBRARY = () => {
  return [{ label: 'Font Awesome', value: 'fontawesome' }]
}

export const OPTIONS_ICON_TYPE = () => {
  return [
    { label: 'Solid', value: 'solid' },
    { label: 'Regular', value: 'regular' },
    { label: 'Light', value: 'light' },
    { label: 'Duotone', value: 'duotone' },
  ]
}

export const OPTIONS_COLOR_THEME = () => [
  { label: 'Enamel Blue', name: 'enamel-blue', color: '#5E5CE6' },
  { label: 'Red', name: 'red', color: '#F1416C' },
  { label: 'Orange', name: 'orange', color: '#F37916' },
  { label: 'Green', name: 'green', color: '#60BC57' },
  { label: 'Blue', name: 'blue', color: '#6F51FF' },
]

export const OPTIONS_GENDER = () => [
  { label: 'Male', value: 'male' },
  { label: 'Female', value: 'female' },
]

export const OPTIONS_ZONA_WAKTU = () => [
  { label: 'WIB', value: 'WIB' },
  { label: 'WITA', value: 'WITA' },
  { label: 'WIT', value: 'WIT' },
]

export const OPTIONS_EDUCATION = () => [
  { label: 'SD', value: 'SD' },
  { label: 'SMP', value: 'SMP' },
  { label: 'SMA', value: 'SMA' },
  { label: 'D-1', value: 'D1' },
  { label: 'D-2', value: 'D2' },
  { label: 'D-3', value: 'D3' },
  { label: 'D-4', value: 'D4' },
  { label: 'S-1', value: 'S1' },
  { label: 'S-2', value: 'S2' },
  { label: 'S-3', value: 'S3' },
]

export const OPTIONS_HARI = () => [
  { label: 'Senin', value: 'Senin' },
  { label: 'Selasa', value: 'Selasa' },
  { label: 'Rabu', value: 'Rabu' },
  { label: 'Kamis', value: 'Kamis' },
  { label: 'Jumat', value: 'Jumat' },
  { label: 'Sabtu', value: 'Sabtu' },
  { label: 'Minggu', value: 'Minggu' },
]
export const DATA_KPI = () => [
  { label: 'Polda', value: 'polda' },
  { label: 'Polres', value: 'polres' },
  { label: 'Polsek', value: 'polsek' },
]

export const DAYS_OPTIONS = () => {
  return [
    { label: 'Mon', value: 'Monday' },
    { label: 'Tue', value: 'Tuesday' },
    { label: 'Wed', value: 'Wednesday' },
    { label: 'Thu', value: 'Thursday' },
    { label: 'Fri', value: 'Friday' },
    { label: 'Sat', value: 'Saturday' },
    { label: 'Sun', value: 'Sunday' },
  ]
}

export const TARGET_RATION_OPTIONS = () => [
  { label: '0.1', value: 0.1 },
  { label: '0.2', value: 0.2 },
  { label: '0.3', value: 0.3 },
  { label: '0.4', value: 0.4 },
  { label: '0.5', value: 0.5 },
  { label: '0.6', value: 0.6 },
  { label: '0.7', value: 0.7 },
  { label: '0.8', value: 0.8 },
  { label: '0.9', value: 0.9 },
  { label: '1', value: 1 },
]

export const OPTIONS_AGE_GROUP = () => [
  {
    label: '<17 tahun',
    value: JSON.stringify({
      range: {
        end: 17,
        field: 'umur',
        start: 0,
      },
    }),
  },
  {
    label: '17 - 21 tahun',
    value: JSON.stringify({
      range: {
        end: 21,
        field: 'umur',
        start: 17,
      },
    }),
  },
  {
    label: '22 - 30 tahun',
    value: JSON.stringify({
      range: {
        end: 30,
        field: 'umur',
        start: 22,
      },
    }),
  },
  {
    label: '31 - 40 tahun',
    value: JSON.stringify({
      range: {
        end: 40,
        field: 'umur',
        start: 31,
      },
    }),
  },

  {
    label: '41 - 55 tahun',
    value: JSON.stringify({
      range: {
        end: 45,
        field: 'umur',
        start: 41,
      },
    }),
  },
  {
    label: '56 - 64 tahun',
    value: JSON.stringify({
      range: {
        end: 64,
        field: 'umur',
        start: 56,
      },
    }),
  },
  {
    label: '>65 tahun',
    value: JSON.stringify({
      range: {
        end: 1000,
        field: 'umur',
        start: 65,
      },
    }),
  },
]

export const OPTION_PAGING_LIMIT = () => [
  { label: '9', value: 9 },
  { label: '10', value: 10 },
  { label: '12', value: 12 },
  { label: '15', value: 15 },
  { label: '20', value: 20 },
  { label: '25', value: 25 },
  { label: '50', value: 50 },
]

export const SORT_OPTIONS: any = [
  { value: 'created_at', label: 'Created At' },
  { value: 'engagements', label: 'Engagements' },
  { value: 'shares_count', label: 'Shares Count' },
  { value: 'likes_count', label: 'Likes Count' },
]

export const SORT_OPTIONS2: any = [
  { value: '', label: 'All' },
  { value: 'ASC', label: 'ASC' },
  { value: 'DESC', label: 'DESC' },
]

export const SOCMED_OPTIONS: any = [
  { value: '', label: 'All' },
  { value: 'twitter', label: 'X' },
  { value: 'instagram', label: 'Instagram' },
  { value: 'tiktok', label: 'Tiktok' },
  // { value: 'threads', label: 'Threads' },
  { value: 'facebook', label: 'Facebook' },
  { value: 'youtube', label: 'Youtube' },
  // { value: 'youtube_shorts', label: 'Youtube Short' },
]

export const OPTIONS_DIVISION: any = [
  { label: 'Ditbinmas', value: 'ditbinmas' },
  { label: 'Ditsabhara', value: 'ditsabhara' },
  { label: 'Ditlantas', value: 'ditlantas' },
  { label: 'Ditpam Opvit', value: 'ditpamOpvit' },
  { label: 'Ditpolair', value: 'ditpolair' },
  { label: 'Ditahti', value: 'ditahti' },
]

export const SOCMED_2_OPTIONS: any = [
  { value: 'twitter', label: 'X' },
  { value: 'instagram', label: 'Instagram' },
  { value: 'facebook', label: 'Facebook' },
  { value: 'youtube', label: 'Youtube' },
]

export const SOCMED_3_OPTIONS: any = [
  { value: 'twitter', label: 'X' },
  { value: 'instagram', label: 'Instagram' },
  { value: 'tiktok', label: 'Tiktok' },
  { value: 'facebook', label: 'Facebook' },
  { value: 'youtube', label: 'Youtube' },
]
export const AGE_CATEGORY_OPTIONS: any = [
  { label: '22-30 Tahun', value: '22-30' },
  { label: '41-55 Tahun', value: '41-55' },
  { label: '31-40 Tahun', value: '31-40' },
  { label: '18-21 Tahun', value: '18-21' },
  { label: 'Tanpa Kategori Usia', value: '' },
]

export const TASK_OPTIONS: any = [
  { value: '', label: 'All', platform: ['', 'twitter', 'instagram', 'tiktok', 'threads'] },
  { value: 'post', label: 'Tweet', platform: ['twitter'] },
  { value: 'reply', label: 'Reply', platform: ['twitter', 'tiktok'] },
  { value: 'like', label: 'Like', platform: ['twitter', 'instagram', 'tiktok', 'threads'] },
  { value: 'retweet', label: 'Retweet', platform: ['twitter'] },
  { value: 'comment', label: 'Comment', platform: ['instagram', 'tiktok', 'threads'] },
]

export const ENGINE_STATUS: any = [
  { value: null, label: 'All' },
  { value: 0, label: 'Process' },
  { value: 1, label: 'Success' },
  { value: 2, label: 'Failed' },
]

export const STATUS_OPTIONS: any = [
  { value: '', label: 'All' },
  { value: 'active', label: 'Success' },
  { value: 'process', label: 'Process' },
  { value: 'failed', label: 'Failed' },
]

export const STATUS_ACCOUNT_OPTIONS = [
  { value: '', label: 'All' },
  { value: 'active', label: 'Active' },
  { value: 'banned', label: 'Banned' },
  { value: 'suspended', label: 'Suspended' },
  // { value: 'uploaded', label: 'Uploaded' },
]

export const SOURCE_GPT_OPTIONS: any = [
  { label: 'OpenAI', value: 'OpenAI' },
  { label: 'ebWhale 7B', value: 'ebWhale-7B-fast' },
  { label: 'ebWhale 13B', value: 'ebWhale-13B' },
]

export const CAMPAIGN_TYPE_OPTIONS: any = [
  { label: 'Campaign 1', value: '1' },
  { label: 'Campaign 2', value: '2' },
  { label: 'Campaign 3', value: '3' },
  { label: 'Campaign 4', value: '4' },
]

export const ACTIVITY_OPTIONS: any = [
  { label: 'Like', value: 'like' },
  { label: 'Retweet', value: 'retweet' },
  { label: 'Like AND Retweet', value: 'like_and_retweet' },
  { label: 'Like OR Retweet', value: 'like_or_retweet' },
]
export const OPTIONS_FILTER: any = [
  { label: 'All', value: '' },
  { label: 'Post', value: 'post' },
  { label: 'Like', value: 'like' },
  { label: 'Save', value: 'save' },
  { label: 'Reply', value: 'reply' },
  { label: 'Quote', value: 'quote' },
  { label: 'Share', value: 'share' },
  { label: 'Repost', value: 'repost' },
  { label: 'Retweet', value: 'retweet' },
  { label: 'Bookmark', value: 'bookmark' },
  { label: 'Incubation', value: 'incubation' },
]

export const POSITION_OPTIONS = () => [
  {
    label: 'AI Engineer',
    value: 'AI Engineer',
  },
  {
    label: 'AI Engineer Leader',
    value: 'AI Engineer Leader',
  },
  {
    label: 'AI Engineer Supervisor',
    value: 'AI Engineer Supervisor',
  },
  {
    label: 'Account  Manager',
    value: 'Account  Manager',
  },
  {
    label: 'Account Executive',
    value: 'Account Executive',
  },
  {
    label: 'Account Manager',
    value: 'Account Manager',
  },
  {
    label: 'Admin ISO',
    value: 'Admin ISO',
  },
  {
    label: 'Admin Marketing',
    value: 'Admin Marketing',
  },
  {
    label: 'Admin Project Support',
    value: 'Admin Project Support',
  },
  {
    label: 'Admin S&M',
    value: 'Admin S&M',
  },
  {
    label: 'Admin Sosial Media',
    value: 'Admin Sosial Media',
  },
  {
    label: 'Assistant of Director',
    value: 'Assistant of Director',
  },
  {
    label: 'BE Programmer',
    value: 'BE Programmer',
  },
  {
    label: 'BE Programmer Leader',
    value: 'BE Programmer Leader',
  },
  {
    label: 'Branding Manager',
    value: 'Branding Manager',
  },
  {
    label: 'Building Management Manager',
    value: 'Building Management Manager',
  },
  {
    label: 'Building Technician',
    value: 'Building Technician',
  },
  {
    label: 'Business Development',
    value: 'Business Development',
  },
  {
    label: 'Chief Technologi Officer',
    value: 'Chief Technologi Officer',
  },
  {
    label: 'Cleaning Service',
    value: 'Cleaning Service',
  },
  {
    label: 'Clipper',
    value: 'Clipper',
  },
  {
    label: 'Clipper Leader',
    value: 'Clipper Leader',
  },
  {
    label: 'Content Creative',
    value: 'Content Creative',
  },
  {
    label: 'Coordination manager',
    value: 'Coordination manager',
  },
  {
    label: 'Corporate Secretary',
    value: 'Corporate Secretary',
  },
  {
    label: 'Crawler',
    value: 'Crawler',
  },
  {
    label: 'Creative Producer',
    value: 'Creative Producer',
  },
  {
    label: 'Cyberforce Supervisor',
    value: 'Cyberforce Supervisor',
  },
  {
    label: 'Data & Sensor Manager',
    value: 'Data & Sensor Manager',
  },
  {
    label: 'Data Admin',
    value: 'Data Admin',
  },
  {
    label: 'Data Analyst',
    value: 'Data Analyst',
  },
  {
    label: 'Data Analyst Leader',
    value: 'Data Analyst Leader',
  },
  {
    label: 'Data Linguistik',
    value: 'Data Linguistik',
  },
  {
    label: 'Data Monitoring',
    value: 'Data Monitoring',
  },
  {
    label: 'Data Scientist',
    value: 'Data Scientist',
  },
  {
    label: 'Data Scientist Leader',
    value: 'Data Scientist Leader',
  },
  {
    label: 'Data Scientist Supervisor',
    value: 'Data Scientist Supervisor',
  },
  {
    label: 'Data linguistik  Leader',
    value: 'Data linguistik  Leader',
  },
  {
    label: 'DevOps Leader',
    value: 'DevOps Leader',
  },
  {
    label: 'Development & Operation Manager',
    value: 'Development & Operation Manager',
  },
  {
    label: 'Director',
    value: 'Director',
  },
  {
    label: 'Driver',
    value: 'Driver',
  },
  {
    label: 'EBHC',
    value: 'EBHC',
  },
  {
    label: 'EBHC Freelance',
    value: 'EBHC Freelance',
  },
  {
    label: 'Electric Technician',
    value: 'Electric Technician',
  },
  {
    label: 'FE Programmer',
    value: 'FE Programmer',
  },
  {
    label: 'FE Programmer Leader',
    value: 'FE Programmer Leader',
  },
  {
    label: 'Finance & Accounting Manager',
    value: 'Finance & Accounting Manager',
  },
  {
    label: 'Finance Officer',
    value: 'Finance Officer',
  },
  {
    label: 'Freelance Clipper',
    value: 'Freelance Clipper',
  },
  {
    label: 'Freelance Network Engineer',
    value: 'Freelance Network Engineer',
  },
  {
    label: 'Freelance OPSINT',
    value: 'Freelance OPSINT',
  },
  {
    label: 'Freelance UI/UX Designer',
    value: 'Freelance UI/UX Designer',
  },
  {
    label: 'Gardener',
    value: 'Gardener',
  },
  {
    label: 'Graphic Designer',
    value: 'Graphic Designer',
  },
  {
    label: 'HR Officer',
    value: 'HR Officer',
  },
  {
    label: 'IPG Leader',
    value: 'IPG Leader',
  },
  {
    label: 'IPG Officer',
    value: 'IPG Officer',
  },
  {
    label: 'IT Manager',
    value: 'IT Manager',
  },
  {
    label: 'Manager',
    value: 'Manager',
  },
  {
    label: 'Media Analist',
    value: 'Media Analist',
  },
  {
    label: 'Media Analist Freelance',
    value: 'Media Analist Freelance',
  },
  {
    label: 'Media Analyst',
    value: 'Media Analyst',
  },
  {
    label: 'Media Analyst Co Section Leader',
    value: 'Media Analyst Co Section Leader',
  },
  {
    label: 'Media Analyst Leader',
    value: 'Media Analyst Leader',
  },
  {
    label: 'Media Analyst Manager',
    value: 'Media Analyst Manager',
  },
  {
    label: 'Mobile Apps Manager',
    value: 'Mobile Apps Manager',
  },
  {
    label: 'Mobile Apps Programmer',
    value: 'Mobile Apps Programmer',
  },
  {
    label: 'Mobile Apps Programmer Leader',
    value: 'Mobile Apps Programmer Leader',
  },
  {
    label: 'Motion & Design Graphic',
    value: 'Motion & Design Graphic',
  },
  {
    label: 'Network Engineer',
    value: 'Network Engineer',
  },
  {
    label: 'OB Jogya',
    value: 'OB Jogya',
  },
  {
    label: 'Office Boy',
    value: 'Office Boy',
  },
  {
    label: 'Opsint Leader',
    value: 'Opsint Leader',
  },
  {
    label: 'Opsint Officer',
    value: 'Opsint Officer',
  },
  {
    label: 'Pemimpin Redaksi',
    value: 'Pemimpin Redaksi',
  },
  {
    label: 'Personal Assistant',
    value: 'Personal Assistant',
  },
  {
    label: 'Platform Manager',
    value: 'Platform Manager',
  },
  {
    label: 'Production & Operation Manager',
    value: 'Production & Operation Manager',
  },
  {
    label: 'Programmer',
    value: 'Programmer',
  },
  {
    label: 'Project Manager',
    value: 'Project Manager',
  },
  {
    label: 'Project Support',
    value: 'Project Support',
  },
  {
    label: 'Quality Assurance Leader',
    value: 'Quality Assurance Leader',
  },
  {
    label: 'Quality Assurance Officer',
    value: 'Quality Assurance Officer',
  },
  {
    label: 'Research Manager',
    value: 'Research Manager',
  },
  {
    label: 'Sales Consultant Specialist',
    value: 'Sales Consultant Specialist',
  },
  {
    label: 'Scanner',
    value: 'Scanner',
  },
  {
    label: 'Senior AI Engineer',
    value: 'Senior AI Engineer',
  },
  {
    label: 'Senior BE Programmer',
    value: 'Senior BE Programmer',
  },
  {
    label: 'Senior Network Engineer',
    value: 'Senior Network Engineer',
  },
  {
    label: 'Social Media',
    value: 'Social Media',
  },
  {
    label: 'Social Media  Leader',
    value: 'Social Media  Leader',
  },
  {
    label: 'Social Media Officer',
    value: 'Social Media Officer',
  },
  {
    label: 'Social Media Specialist',
    value: 'Social Media Specialist',
  },
  {
    label: 'Support Office',
    value: 'Support Office',
  },
  {
    label: 'System Analyst',
    value: 'System Analyst',
  },
  {
    label: 'System Engineer',
    value: 'System Engineer',
  },
  {
    label: 'UI/ UX Designer',
    value: 'UI/ UX Designer',
  },
  {
    label: 'Video Journalist',
    value: 'Video Journalist',
  },
  {
    label: 'Visualization & Analytics Manager',
    value: 'Visualization & Analytics Manager',
  },
  {
    label: 'Visualization & Analytics Supervisor',
    value: 'Visualization & Analytics Supervisor',
  },
  {
    label: 'WS Programmer',
    value: 'WS Programmer',
  },
  {
    label: 'WS Programmer Leader',
    value: 'WS Programmer Leader',
  },
]

export const PERSON_METRIC_CONFIG = [
  {
    icon: 'twitter',
    username: '@ivyjade',
  },
  {
    icon: 'facebook',
    username: '@ivyjade',
  },
  {
    icon: 'instagram',
    username: '@ivyjade',
  },
  {
    icon: 'tiktok',
    username: '@ivyjade',
  },
  {
    icon: 'youtube',
    username: '@ivyjade',
  },
]

export const OPTION_PAGING_LIMITS = [
  { label: '5', value: 5 },
  { label: '10', value: 10, default: true },
  { label: '15', value: 15 },
  { label: '20', value: 20 },
  { label: '25', value: 25 },
  { label: '50', value: 50 },
]

export const OPTION_PAGING_LIMIT_PAGINATION = [
  { label: '5', value: 5 },
  { label: '10', value: 10 , default: true },
  { label: '15', value: 15 },
  { label: '20', value: 20 },
  { label: '25', value: 25 },
  { label: '50', value: 50 },
]

export const OPTION_PAGING_LIMIT_8 = [
  { label: '5', value: 5 },
  { label: '8', value: 8, default: true },
  { label: '16', value: 16 },
  { label: '24', value: 24 },
  { label: '32', value: 32 },
  { label: '40', value: 40 },
  { label: '48', value: 48 },
]

export const OPTION_PAGING_LIMIT_18 = [
  { label: '18', value: 18 },
  { label: '24', value: 24 },
  { label: '32', value: 32 },
  { label: '40', value: 40 },
  { label: '48', value: 48 },
]

export const OPTION_PAGING_LIMIT_6 = [
  { label: '8', value: 6 },
  { label: '12', value: 12 },
  { label: '24', value: 24, default: true },
  { label: '48', value: 48 },
  { label: '60', value: 60 },
  { label: '96', value: 96 },
]

export const OPTION_PAGING_LIMIT_9 = [
  { label: '9', value: 9, default: true },
  { label: '12', value: 12 },
  { label: '18', value: 18 },
  { label: '30', value: 30 },
  { label: '36', value: 36 },
  { label: '45', value: 45 },
  { label: '60', value: 60 },
]

export const OPTION_PAGING_LIMIT_12 = [
  { label: '8', value: 8, default: true },
  { label: '12', value: 12 },
  { label: '18', value: 16 },
  { label: '30', value: 32 },
  { label: '36', value: 40 },
  { label: '45', value: 48 },
  { label: '60', value: 64 },
]

export const OPTION_PAGING_LIMIT_13 = [
  { label: '4', value: 4, default: true },
  { label: '8', value: 8 },
  { label: '12', value: 12 },
  { label: '18', value: 16 },
  { label: '30', value: 32 },
  { label: '36', value: 40 },
  { label: '45', value: 48 },
  { label: '60', value: 64 },
]
