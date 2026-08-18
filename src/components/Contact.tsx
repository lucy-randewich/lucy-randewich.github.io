import { Box, Link, Typography } from '@mui/material';

interface ContactProps { id?: string }
const Contact = ({ id }: ContactProps) => <section id={id}>
  <Box component="footer" sx={{ bgcolor: '#171716', color: '#fff', px: { xs: 2.5, md: 4 }, py: { xs: 7, md: 9 } }}>
    <Box sx={{ maxWidth: '1200px', mx: 'auto' }}>
      <Typography sx={{ color: '#e7a7a9', fontSize: '.75rem', letterSpacing: '.16em', fontWeight: 700, textTransform: 'uppercase', mb: 2 }}>Get in touch</Typography>
      <Typography sx={{ fontFamily: 'Georgia, serif', fontSize: { xs: '2.7rem', md: '4.5rem' }, lineHeight: 1, letterSpacing: '-.05em', maxWidth: '720px' }}>Interested in working together?</Typography>
      <Link href="mailto:lucyrandewich@gmail.com" underline="none" sx={{ display: 'inline-block', color: '#fff', fontSize: { xs: '1.2rem', md: '1.5rem' }, fontWeight: 600, borderBottom: '1px solid #e7a7a9', mt: 4, pb: .5, '&:hover': { color: '#e7a7a9' } }}>lucyrandewich@gmail.com</Link>
      <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 3, mt: 7, pt: 2.5, borderTop: '1px solid #43413d' }}><Link href="https://github.com/lucy-randewich" target="_blank" rel="noreferrer" sx={{ color: '#d7d4ce', '&:hover': { color: '#fff' } }}>GitHub</Link><Link href="https://www.linkedin.com/in/lucyrandewich" target="_blank" rel="noreferrer" sx={{ color: '#d7d4ce', '&:hover': { color: '#fff' } }}>LinkedIn</Link><Typography sx={{ color: '#a7a49e', ml: { md: 'auto' }, fontSize: '.85rem' }}>© {new Date().getFullYear()} Lucy Randewich</Typography></Box>
    </Box>
  </Box>
</section>;
export default Contact;
