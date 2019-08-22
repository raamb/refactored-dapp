export const useStyles = theme => ({
  serviceDetailContainer: {
    width: "auto",
    padding: "67px 0",
    backgroundColor: theme.palette.text.offWhiteColor,
    '& > div':{ 
      paddingLeft: 60,
      paddingRight: 60
    }
  },
  TopSection:{
    width: '100%',    
    marginTop: 32,
    display: 'flex',
  },
  computerVisionContainer: { display: "flex" },
  computerVisionContent: {
    marginLeft: 25,
    "& > span": {
      color: theme.palette.text.primary,
      fontSize: 14,
      textTransform: "uppercase",
    },
    "& h2": {
      color: theme.palette.text.darkShadedGray,
      fontSize: 38,
    },
  },
  ratingStars: {
    "& .dv-star-rating-empty-star": {
      "& i": { color: theme.palette.text.disabledBtnBg },
    },
    "& i": {
      color: theme.palette.text.RatingStarColor,
      fontSize: 22,
      paddingRight: 2,
    },
  },
  ratedCount: {
    marginLeft: 10,
    display: "inline-block",
    color: theme.palette.text.secondary,
    fontSize: 12,
    fontWeight: 600,
    letterSpacing: 2,
    verticalAlign: "super",
  },
  apiCall: {
    padding: "6px 15px",
    borderWidth: 1,
    borderStyle: "solid",
    borderColor: theme.palette.text.lightGray,
    borderRadius: 4,
    marginLeft: 20,
    color: theme.palette.text.lightShadedGray,
    fontSize: 12,
    fontWeight: 600,
    letterSpacing: 2,
    verticalAlign: "super",
  },
  creditsContainer: {
    padding: "12px 0",
    backgroundColor: theme.palette.text.cardBackground,
    border: "1px solid #E2E2E2",
    borderRadius: 4,
    boxSizing: "border-box",
    textAlign: "center",
    "& p": {
      margin: 0,
      color: theme.palette.text.mediumShadeGray,
      lineHeight: "14px",
      paddingTop: 5,
      "& i": {
        paddingRight: 12,
        color: theme.palette.text.lightGray,
        fontSize: 20,
      },
    },
    "& button": {
      marginTop: 10,
      padding: "7px 65px",
    },
  },
  creditsAndToken: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    "& div": {
      display: "flex",
      flexDirection: "column",
      "& span": {
        color: theme.palette.text.lightShadedGray,
        fontSize: 14,
        textTransform: "uppercase",
        "&:last-of-type": {
          color: theme.palette.text.purple,
          fontSize: 38,
          lineHeight: "34px",
        },
      },
    },
    "& > span": {
      padding: "20px 25px 0",
      color: theme.palette.text.lightShadedGray,
      fontSize: 24,
    },
  },
});
