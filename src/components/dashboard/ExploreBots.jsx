import * as React from "react";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import Chip from "@mui/material/Chip";
import Stack from "@mui/material/Stack";
import { styled } from "@mui/material/styles";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell, { tableCellClasses } from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import Typography from "@mui/material/Typography";
import CardMedia from '@mui/material/CardMedia';
import { Container } from "@mui/system";
const StyledTableCell = styled(TableCell)(({ theme }) => ({
  [`&.${tableCellClasses.head}`]: {
    backgroundColor: theme.palette.common.black,
    color: theme.palette.common.white,
  },
  [`&.${tableCellClasses.body}`]: {
    fontSize: 14,
  },
}));

const StyledTableRow = styled(TableRow)(({ theme }) => ({
  "&:nth-of-type(odd)": {
    backgroundColor: theme.palette.action.hover,
  },
  // hide last border
  "&:last-child td, &:last-child th": {
    border: 0,
  },
}));


const chipData = [
  "Music",
  "Movies",
  "Books",
  "Art",
  "Sports",
  "News",
  "Games",
  "Writing",
  "Fashion",
  "Food",
  "Travel",
];
export default function ExploreBots() {
  const handleClick = () => {
    console.info("You clicked the Chip.");
  };

  return (
    <Container
      sx={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        marginLeft: "auto",
      }}
    >
      <Box
        sx={{
          width: 920,
          maxWidth: "100%",
          marginLeft: "auto",
        }}
      >
        <TextField fullWidth label="fullWidth" id="fullWidth" />
      </Box>

      <Stack
        sx={{
          marginLeft: "auto",
          width: 920,
          maxWidth: "100%",
          marginBottom: "16px",
          marginTop: "16px",
        }}
        direction="row"
        spacing={1}
      >
        {chipData.map((data) => (
          <Chip key={data} label={data} onClick={handleClick} />
        ))}
      </Stack>

      <TableContainer
        sx={{ marginLeft: "auto", width: 920, maxWidth: "100%" }}
        component={Paper}
      >
        <Table aria-label="customized table">
          <TableHead>
            <TableRow>
                <StyledTableCell></StyledTableCell>
              <StyledTableCell>Bot Name</StyledTableCell>
              <StyledTableCell align="right">Followers</StyledTableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {/* {rows.map((row) => ( */}
            <StyledTableRow key={1}>
                {/* <StyledTableCell component="th" scope="row"> */}
                    <CardMedia
                    sx={{maxWidth: '80px',  borderRadius: '50%', marginRight: '4px'}}
                        component="img"
                        image="/Midjourney_Emblem.png"
                        alt="MidJourneyBot"
                    />

                {/* </StyledTableCell> */}

              <StyledTableCell component="th" scope="row">
                <div>
                  <Typography variant="h6">MidJourneyBot</Typography>
                  <Typography variant="caption" color="textSecondary">
                    MidJourney Photo prompter
                  </Typography>
                </div>
              </StyledTableCell>
              <StyledTableCell align="right">{"39k+"}</StyledTableCell>
            </StyledTableRow>
            {/* ))} */}
          </TableBody>
        </Table>
      </TableContainer>
    </Container>
  );
}
