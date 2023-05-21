import { useForm } from "react-hook-form";
import { Button, Input } from "@material-tailwind/react";
import { Checkbox } from "@material-tailwind/react";
import Link from "next/link";
import logo from '../images/logo.png'
import Image from "next/image";
import Footer from "@/components/Footer";
import React, { useContext, useEffect } from "react";
import { Select, Option } from "@material-tailwind/react";
import { postData } from "@/api";
import { toast } from "react-toastify";
import { UserContext } from "@/context/User";

const countries = [
    {
        name: "Afghanistan"
    },
    {
        name: "Albania"
    },
    {
        name: "Algeria"
    },
    {
        name: "American Samoa"
    },
    {
        name: "Andorra"
    },
    {
        name: "Angola"
    },
    {
        name: "Anguilla"
    },
    {
        name: "Antarctica"
    },
    {
        name: "Antigua and Barbuda"
    },
    {
        name: "Argentina"
    },
    {
        name: "Armenia"
    },
    {
        name: "Aruba"
    },
    {
        name: "Australia"
    },
    {
        name: "Austria"
    },
    {
        name: "Azerbaijan"
    },
    {
        name: "Bahamas"
    },
    {
        name: "Bahrain"
    },
    {
        name: "Bangladesh"
    },
    {
        name: "Barbados"
    },
    {
        name: "Belarus"
    },
    {
        name: "Belgium"
    },
    {
        name: "Belize"
    },
    {
        name: "Benin"
    },
    {
        name: "Bermuda"
    },
    {
        name: "Bhutan"
    },
    {
        name: "Bolivia, Plurinational State of"
    },
    {
        name: "Bonaire, Sint Eustatius and Saba"
    },
    {
        name: "Bosnia and Herzegovina"
    },
    {
        name: "Botswana"
    },
    {
        name: "Bouvet Island"
    },
    {
        name: "Brazil"
    },
    {
        name: "British Indian Ocean Territory"
    },
    {
        name: "Brunei Darussalam"
    },
    {
        name: "Bulgaria"
    },
    {
        name: "Burkina Faso"
    },
    {
        name: "Burundi"
    },
    {
        name: "Cambodia"
    },
    {
        name: "Cameroon"
    },
    {
        name: "Canada"
    },
    {
        name: "Cape Verde"
    },
    {
        name: "Cayman Islands"
    },
    {
        name: "Central African Republic"
    },
    {
        name: "Chad"
    },
    {
        name: "Chile"
    },
    {
        name: "China"
    },
    {
        name: "Christmas Island"
    },
    {
        name: "Cocos (Keeling) Islands"
    },
    {
        name: "Colombia"
    },
    {
        name: "Comoros"
    },
    {
        name: "Congo"
    },
    {
        name: "Congo, the Democratic Republic of the"
    },
    {
        name: "Cook Islands"
    },
    {
        name: "Costa Rica"
    },
    {
        name: "Croatia"
    },
    {
        name: "Cuba"
    },
    {
        name: "Curaçao"
    },
    {
        name: "Cyprus"
    },
    {
        name: "Czech Republic"
    },
    {
        name: "Côte d'Ivoire"
    },
    {
        name: "Denmark"
    },
    {
        name: "Djibouti"
    },
    {
        name: "Dominica"
    },
    {
        name: "Dominican Republic"
    },
    {
        name: "Ecuador"
    },
    {
        name: "Egypt"
    },
    {
        name: "El Salvador"
    },
    {
        name: "Equatorial Guinea"
    },
    {
        name: "Eritrea"
    },
    {
        name: "Estonia"
    },
    {
        name: "Ethiopia"
    },
    {
        name: "Falkland Islands (Malvinas)"
    },
    {
        name: "Faroe Islands"
    },
    {
        name: "Fiji"
    },
    {
        name: "Finland"
    },
    {
        name: "France"
    },
    {
        name: "French Guiana"
    },
    {
        name: "French Polynesia"
    },
    {
        name: "French Southern Territories"
    },
    {
        name: "Gabon"
    },
    {
        name: "Gambia"
    },
    {
        name: "Georgia"
    },
    {
        name: "Germany"
    },
    {
        name: "Ghana"
    },
    {
        name: "Gibraltar"
    },
    {
        name: "Greece"
    },
    {
        name: "Greenland"
    },
    {
        name: "Grenada"
    },
    {
        name: "Guadeloupe"
    },
    {
        name: "Guam"
    },
    {
        name: "Guatemala"
    },
    {
        name: "Guernsey"
    },
    {
        name: "Guinea"
    },
    {
        name: "Guinea-Bissau"
    },
    {
        name: "Guyana"
    },
    {
        name: "Haiti"
    },
    {
        name: "Heard Island and McDonald Islands"
    },
    {
        name: "Holy See (Vatican City State)"
    },
    {
        name: "Honduras"
    },
    {
        name: "Hong Kong"
    },
    {
        name: "Hungary"
    },
    {
        name: "Iceland"
    },
    {
        name: "Indonesia"
    },
    {
        name: "Iraq"
    },
    {
        name: "Ireland"
    },
    {
        name: "Isle of Man"
    },
    {
        name: "Israel"
    },
    {
        name: "Italy"
    },
    {
        name: "Jamaica"
    },
    {
        name: "Japan"
    },
    {
        name: "Jersey"
    },
    {
        name: "Jordan"
    },
    {
        name: "Kazakhstan"
    },
    {
        name: "Kenya"
    },
    {
        name: "Kiribati"
    },
    {
        name: "Korea, Republic of"
    },
    {
        name: "Kosovo"
    },
    {
        name: "Kuwait"
    },
    {
        name: "Kyrgyzstan"
    },
    {
        name: "Lao People's Democratic Republic"
    },
    {
        name: "Latvia"
    },
    {
        name: "Lebanon"
    },
    {
        name: "Lesotho"
    },
    {
        name: "Liberia"
    },
    {
        name: "Libya"
    },
    {
        name: "Liechtenstein"
    },
    {
        name: "Lithuania"
    },
    {
        name: "Luxembourg"
    },
    {
        name: "Macao"
    },
    {
        name: "Macedonia, the former Yugoslav Republic of"
    },
    {
        name: "Madagascar"
    },
    {
        name: "Malawi"
    },
    {
        name: "Malaysia"
    },
    {
        name: "Maldives"
    },
    {
        name: "Mali"
    },
    {
        name: "Malta"
    },
    {
        name: "Marshall Islands"
    },
    {
        name: "Martinique"
    },
    {
        name: "Mauritania"
    },
    {
        name: "Mauritius"
    },
    {
        name: "Mayotte"
    },
    {
        name: "Mexico"
    },
    {
        name: "Micronesia, Federated States of"
    },
    {
        name: "Moldova, Republic of"
    },
    {
        name: "Monaco"
    },
    {
        name: "Mongolia"
    },
    {
        name: "Montenegro"
    },
    {
        name: "Montserrat"
    },
    {
        name: "Morocco"
    },
    {
        name: "Mozambique"
    },
    {
        name: "Myanmar"
    },
    {
        name: "Namibia"
    },
    {
        name: "Nauru"
    },
    {
        name: "Nepal"
    },
    {
        name: "Netherlands"
    },
    {
        name: "New Caledonia"
    },
    {
        name: "New Zealand"
    },
    {
        name: "Nicaragua"
    },
    {
        name: "Niger"
    },
    {
        name: "Nigeria"
    },
    {
        name: "Niue"
    },
    {
        name: "Norfolk Island"
    },
    {
        name: "Northern Mariana Islands"
    },
    {
        name: "Norway"
    },
    {
        name: "Oman"
    },
    {
        name: "Pakistan"
    },
    {
        name: "Palau"
    },
    {
        name: "Palestinian Territory, Occupied"
    },
    {
        name: "Panama"
    },
    {
        name: "Papua New Guinea"
    },
    {
        name: "Paraguay"
    },
    {
        name: "Peru"
    },
    {
        name: "Philippines"
    },
    {
        name: "Pitcairn"
    },
    {
        name: "Poland"
    },
    {
        name: "Portugal"
    },
    {
        name: "Puerto Rico"
    },
    {
        name: "Qatar"
    },
    {
        name: "Romania"
    },
    {
        name: "Russian Federation"
    },
    {
        name: "Rwanda"
    },
    {
        name: "Réunion"
    },
    {
        name: "Saint Barthélemy"
    },
    {
        name: "Saint Helena, Ascension and Tristan da Cunha"
    },
    {
        name: "Saint Kitts and Nevis"
    },
    {
        name: "Saint Lucia"
    },
    {
        name: "Saint Martin (French part)"
    },
    {
        name: "Saint Pierre and Miquelon"
    },
    {
        name: "Saint Vincent and the Grenadines"
    },
    {
        name: "Samoa"
    },
    {
        name: "San Marino"
    },
    {
        name: "Sao Tome and Principe"
    },
    {
        name: "Saudi Arabia"
    },
    {
        name: "Senegal"
    },
    {
        name: "Serbia"
    },
    {
        name: "Seychelles"
    },
    {
        name: "Sierra Leone"
    },
    {
        name: "Singapore"
    },
    {
        name: "Sint Maarten (Dutch part)"
    },
    {
        name: "Slovakia"
    },
    {
        name: "Slovenia"
    },
    {
        name: "Solomon Islands"
    },
    {
        name: "Somalia"
    },
    {
        name: "South Africa"
    },
    {
        name: "South Georgia and the South Sandwich Islands"
    },
    {
        name: "South Sudan"
    },
    {
        name: "Spain"
    },
    {
        name: "Sri Lanka"
    },
    {
        name: "Sudan"
    },
    {
        name: "Suriname"
    },
    {
        name: "Svalbard and Jan Mayen"
    },
    {
        name: "Swaziland"
    },
    {
        name: "Sweden"
    },
    {
        name: "Switzerland"
    },
    {
        name: "Taiwan"
    },
    {
        name: "Tajikistan"
    },
    {
        name: "Tanzania, United Republic of"
    },
    {
        name: "Thailand"
    },
    {
        name: "Timor-Leste"
    },
    {
        name: "Togo"
    },
    {
        name: "Tokelau"
    },
    {
        name: "Tonga"
    },
    {
        name: "Trinidad and Tobago"
    },
    {
        name: "Tunisia"
    },
    {
        name: "Turkey"
    },
    {
        name: "Turkmenistan"
    },
    {
        name: "Turks and Caicos Islands"
    },
    {
        name: "Tuvalu"
    },
    {
        name: "USA"
    },
    {
        name: "Uganda"
    },
    {
        name: "Ukraine"
    },
    {
        name: "United Arab Emirates"
    },
    {
        name: "United Kingdom"
    },
    {
        name: "United States Minor Outlying Islands"
    },
    {
        name: "Uruguay"
    },
    {
        name: "Uzbekistan"
    },
    {
        name: "Vanuatu"
    },
    {
        name: "Venezuela, Bolivarian Republic of"
    },
    {
        name: "Viet Nam"
    },
    {
        name: "Virgin Islands, British"
    },
    {
        name: "Virgin Islands, U.S."
    },
    {
        name: "Wallis and Futuna"
    },
    {
        name: "Western Sahara"
    },
    {
        name: "Yemen"
    },
    {
        name: "Zambia"
    },
    {
        name: "Zimbabwe"
    },
    {
        name: "Åland Islands"
    },
    {
        name: "State of residence"
    },
    {
        name: "Alabama"
    },
    {
        name: "Alaska"
    },
    {
        name: "Arizona"
    },
    {
        name: "California"
    },
    {
        name: "Colorado"
    },
    {
        name: "Connecticut"
    },
    {
        name: "District of Columbia"
    },
    {
        name: "Florida"
    },
    {
        name: "Georgia"
    },
    {
        name: "Hawaii"
    },
    {
        name: "Idaho"
    },
    {
        name: "Illinois"
    },
    {
        name: "Indiana"
    },
    {
        name: "Iowa"
    },
    {
        name: "Kansas"
    },
    {
        name: "Kentucky"
    },
    {
        name: "Maine"
    },
    {
        name: "Maryland"
    },
    {
        name: "Massachusetts"
    },
    {
        name: "Michigan"
    },
    {
        name: "Minnesota"
    },
    {
        name: "Mississippi"
    },
    {
        name: "Missouri"
    },
    {
        name: "Nebraska"
    },
    {
        name: "Nevada"
    },
    {
        name: "New Hampshire"
    },
    {
        name: "New Jersey"
    },
    {
        name: "New Mexico"
    },
    {
        name: "NewYork"
    },
    {
        name: "North Carolina"
    },
    {
        name: "North Dakota"
    },
    {
        name: "Ohio"
    },
    {
        name: "Oklahoma"
    },
    {
        name: "Oregon"
    },
    {
        name: "Pennsylvania"
    },
    {
        name: "Rhode Island"
    },
    {
        name: "South Dakota"
    },
    {
        name: "Tennessee"
    },
    {
        name: "Texas"
    },
    {
        name: "Utah"
    },
    {
        name: "Vermont"
    },
    {
        name: "Virginia"
    },
    {
        name: "Washington"
    },
    {
        name: "West Virginia"
    },
    {
        name: "Wisconsin"
    },
    {
        name: "Wyoming"
    }
]

const Register = ()=>{
    const { register, handleSubmit,setValue, formState: { errors } } = useForm();
    const {user} = useContext(UserContext)
    useEffect(()=>{
        if(Object.keys(user).length == 0) return
        setValue('email',user?.email)
        setValue('fname',user?.given_name)
        setValue('lname',user?.family_name)
    },[])
    const onSubmit = data =>{
        if(data.password != data.pass) return toast.error("Password don't match")
        if(data.password.length < 6) return toast.error("Password should be at leat 6 characters")
        delete data.pass
        delete data.terms
        postData('register',data)
        .then(res=>{
            console.log(res.data)
            if(res.data?.error){
               if(res.data?.error?.split(' ')?.includes('Duplicate')){
                    toast.error('Email already exist') 
               }else{
                   toast.error(res.data?.error)
               }
            }else{
                window.localStorage.setItem('token', res.data.token)
                window.localStorage.setItem('user', JSON.stringify(res.data.user))
                window.location.href = '/client-area'
            }
        })
        .catch(err=>{
            toast.error(err?.response?.data?.error || "Network error please try again")
        })
    } 
    return<><div className="w-full py-8 max-w-lg mx-auto px-3">
           <div className="mx-auto pb-6 flex items-center gap-2">
            <Image src = {logo} alt="LOGO" width={50}/>
            <p className="font-extrabold text-3xl text-blue-gray-800">FMFX</p>
            
           </div>
          <p className='text-3xl font-normal text-blue-gray-800 pb-4'>Sign Up</p>
          <form onSubmit={handleSubmit(onSubmit)}>
            <div className="w-full pb-3">
                 <Input error={errors.fname} label="First Name"  {...register("fname",{required:true})} />
            </div>
            <div className="w-full pb-3">
                 <Input error={errors.lname} label="Last Name"  {...register("lname",{required:true})} />
            </div>
            <div className="w-full pb-3">
                 <Input type="email" error={errors.email} label="Email"  {...register("email",{required:true})} />
            </div>
            <div className="w-full pb-3">
                 <Select
                    error = {errors.country}
                    name="country"
                    size="lg"
                    label="Select Country"
                    onChange={e=>{
                        setValue('country', e)
                    }}
                    // {...register("country",{required:true})}
                    selected={(element) =>
                    element &&
                    React.cloneElement(element, {
                        className: "flex items-center px-0 gap-2 pointer-events-none",
                    })
                    }
                >
                    {countries.map(({name},i) => (
                    <Option key={i} value={name} className="flex items-center gap-2">
                        {name}
                    </Option>
                    ))}
                </Select>
            </div>
            <input type="hidden" {...register("country",{required:true})} />
            <div className="w-full pb-3">
                 <Input type="password" error={errors.password} label="Password"  {...register("password",{required:true})} />
            </div>
            <div className="w-full pb-3">
                 <Input type="password" error={errors.pass} label="Confirm Password"  {...register("pass",{required:true})} />
            </div>
            <div className="w-full pb-3 flex gap-2 items-center">
                <Checkbox error = {errors.terms}  {...register("terms",{required:true})}/>
                <p className="text-xs" style={{color:`${errors.terms?'red':''}`}}>I agree to the terms & conditions according to <Link className="text-cyan-500" href={'/terms'}>PRIVACY POLICY.</Link></p>
            </div>
            <div className="w-full pb-2">
                 <Button type="submit">Continue</Button>
            </div>
            </form>
            <div className="flex gap-2 items-center py-5">
            <p className="text-xs">Already have an account?, <Link className="text-cyan-500" href={'/login'}>Sign In.</Link></p>
            </div>
    </div>
    <Footer/>
    </> 
}

export default Register