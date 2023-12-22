// icons
import {
    FaHtml5,
    FaCss3,
    FaJs,
    FaReact,
    FaWordpress,
    FaFigma,
} from 'react-icons/fa';

import {
    SiNextdotjs,
    SiFramer,
    SiAdobexd,
    SiAdobephotoshop,
} from 'react-icons/si';

// about data
export const aboutData = [
    {
        title: 'skills',
        info: [
            {
                title: 'Web Development',
                icons: [
                    <FaHtml5 key={'uno'} />,
                    <FaCss3 key={'uno'} />,
                    <FaJs key={'uno'} />,
                    <FaReact key={'uno'} />,
                    <SiNextdotjs key={'uno'} />,
                    <SiFramer key={'uno'} />,
                    <FaWordpress key={'uno'} />,
                ],
            },
            {
                title: 'UI/UX Design',
                icons: [<FaFigma key={'uno'} />,
                    <SiAdobexd key={'uno'} />,
                <SiAdobephotoshop key={'uno'} />],
            },
            {
                title: 'awards',
                info: [
                    {
                        title: 'Webby Awards - Honoree',
                        stage: '2011 - 2012',
                    },
                    {
                        title: 'Adobe Design Achievement Awards - Finalist',
                        stage: ' 2009 - 2010',
                    },
                ],
            },
            {
                title: 'experience',
                info: [
                    {
                        title: 'UX/UI Designer - XYZ Company',
                        stage: '2012 - 2023'
                    },
                    {
                        title: 'Web Developer - ABC Agency',
                        stage: '2010 - 2012'
                    },
                    {
                        title: 'Intern - DEF Corporation',
                        stage: '2008 - 2010'
                    },
                ],
            },
            {
                title: 'credentials',
                info: [
                    {
                        title: 'Web Development - ABC University, LA, CA',
                        stage: '2011'
                    },
                    {
                        title: 'Computer Science Diploma - AV Technical Institute',
                        stage: '2009'
                    },
                    {
                        title: 'Certified Graphic Designer - ABC Institute, Los Angeles, CA',
                        stage: '2006'
                    },
                ]
            }
        ],
    }
]

export default function About() {
    return <div>About</div>
}