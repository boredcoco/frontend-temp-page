import Box from '@mui/material/Box';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import StyleTabLabel from './StyledTabLabel';
import Typography from '@mui/material/Typography';

export default function StyledJobPanel(jobTitle, company, location, image, description) {
  return (
    <Stack direction="column" justifyContent="space-evenly">
      <Stack direction="row" alignItems="center" justifyContent="space-evenly">
        {StyleTabLabel(jobTitle, company, location, image)}
        <Box>
          <Button variant="contained" color="success">Apply</Button>
        </Box>
      </Stack>
      <br/>
      <Box>
        <Typography color="text.secondary">{description}</Typography>
      </Box>
    </Stack>
  )
}
