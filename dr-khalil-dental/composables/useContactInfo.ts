export const useContactInfo = () => {
  const phone = '+961 1 234 567'
  const phoneClean = '+9611234567'
  const whatsappNumber = '9611234567'
  const whatsappMessage = encodeURIComponent('Hello Dr. Ahmad, I would like to book an appointment.')
  const whatsappLink = `https://wa.me/${whatsappNumber}?text=${whatsappMessage}`
  
  const address = {
    en: 'Achrafieh, Beirut, Lebanon',
    ar: 'عيادة د. أحمد خليل لطب الأسنان — الأشرفية، بيروت',
  }

  const openingHours = [
    { day: 'Monday', hours: '9:00 AM – 7:00 PM' },
    { day: 'Tuesday', hours: '9:00 AM – 7:00 PM' },
    { day: 'Wednesday', hours: '9:00 AM – 7:00 PM' },
    { day: 'Thursday', hours: '9:00 AM – 7:00 PM' },
    { day: 'Friday', hours: '9:00 AM – 7:00 PM' },
    { day: 'Saturday', hours: '9:00 AM – 7:00 PM' },
    { day: 'Sunday', hours: 'Closed' },
  ]

  const googleMapsEmbed = 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d13251.953478570892!2d35.5127!3d33.8938!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x151f17215880a78f%3A0x729182bae99836b4!2sAchrafieh%2C%20Beirut%2C%20Lebanon!5e0!3m2!1sen!2s!4v1709000000000'

  return {
    phone,
    phoneClean,
    whatsappNumber,
    whatsappLink,
    address,
    openingHours,
    googleMapsEmbed,
  }
}
