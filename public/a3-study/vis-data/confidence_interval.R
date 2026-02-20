install.packages(c("jsonlite", "ggplot2"))
library(jsonlite)
library(ggplot2)

json_data <- read_json(paste0(getwd(), "/public/a3-study/vis-data/smarty_answers.json"), simplifyVector = TRUE)
json_df <- as.data.frame(json_data)
colnames(json_df) <- gsub("-", "_", colnames(json_df))
json_df$chart_type <- factor(json_df$chart_type, levels = c("pie", "stacked-bar", "bar"))
json_df$log_error <- pmax(log2(abs(json_df$guess_percent - json_df$true_percent) + 0.125), 0)

ggplot(data = json_df, aes(x = log_error, y = chart_type)) +
  stat_summary(fun.data = mean_cl_normal, geom = "errorbar", width = 0.2) +
  stat_summary(fun = mean, geom = "point", size = 5, color = "black") +
  labs(x = "Log Error", y = "Chart Type")

ggsave(paste0(getwd(), "/public/a3-study/vis-data/error.png"), width = 8, height = 6, dpi = 300)
