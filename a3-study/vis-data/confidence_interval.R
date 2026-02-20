install.packages(c("jsonlite", "ggplot2"))
library(jsonlite)
json_data <- read_json(paste0(getwd(), "/public/a3-study/vis-data/smarty_answers.json"), simplifyVector = TRUE)
json_df <- as.data.frame(json_data)

colnames(json_df) <- gsub("-", "_", colnames(json_df))
json_df

json_df$chart_type <- factor(json_df$chart_type, levels = c("pie", "stacked-bar", "bar"))

json_df$guess_percent <- as.numeric(json_df$guess_percent)
json_df$log_error <- pmax(log2(abs(json_df$guess_percent - json_df$true_percent) + 0.125), 0)

library(ggplot2)
ggplot(data = json_df, aes(x = log_error, y = chart_type)) +
  stat_summary(fun.data = mean_cl_normal, geom = "errorbar", width = 0.2) +
  labs(x= "Log Error", y = "Chart Type") +
  stat_summary(fun.data = mean_sdl, geom = "point", size = 5, color = "black")

