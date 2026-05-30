import path from "node:path";
import {
  Document,
  Font,
  Page,
  StyleSheet,
  Text,
  View,
} from "@react-pdf/renderer";
import type { PortfolioData, PortfolioLocale } from "@/data/types";

Font.register({
  family: "BeVietnamPro",
  fonts: [
    {
      src: path.join(
        process.cwd(),
        "node_modules/@fontsource/be-vietnam-pro/files/be-vietnam-pro-vietnamese-400-normal.woff",
      ),
      fontWeight: 400,
    },
    {
      src: path.join(
        process.cwd(),
        "node_modules/@fontsource/be-vietnam-pro/files/be-vietnam-pro-vietnamese-500-normal.woff",
      ),
      fontWeight: 500,
    },
    {
      src: path.join(
        process.cwd(),
        "node_modules/@fontsource/be-vietnam-pro/files/be-vietnam-pro-vietnamese-700-normal.woff",
      ),
      fontWeight: 700,
    },
  ],
});

const labelsByLocale: Record<
  PortfolioLocale,
  {
    summary: string;
    skills: string;
    experience: string;
    projects: string;
    education: string;
    contactSeparator: string;
  }
> = {
  vi: {
    summary: "Tóm tắt năng lực",
    skills: "Kỹ năng chuyên môn",
    experience: "Kinh nghiệm làm việc",
    projects: "Dự án nổi bật",
    education: "Học vấn & Thành tựu",
    contactSeparator: "|",
  },
  en: {
    summary: "Professional summary",
    skills: "Technical skills",
    experience: "Work experience",
    projects: "Selected projects",
    education: "Education & achievements",
    contactSeparator: "|",
  },
};

const styles = StyleSheet.create({
  page: {
    paddingTop: 34,
    paddingBottom: 32,
    paddingHorizontal: 42,
    fontFamily: "BeVietnamPro",
    fontSize: 8.6,
    color: "#111827",
    lineHeight: 1.32,
  },
  header: {
    alignItems: "center",
    marginBottom: 8,
  },
  name: {
    color: "#075a9c",
    fontSize: 21,
    fontWeight: 700,
    lineHeight: 1.05,
  },
  role: {
    color: "#075a9c",
    fontSize: 9.8,
    marginTop: 1,
  },
  contactRow: {
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "center",
    gap: 5,
    color: "#075a9c",
    fontSize: 8,
    marginTop: 2,
  },
  section: {
    marginTop: 6,
  },
  sectionTitleRow: {
    flexDirection: "row",
    alignItems: "center",
    gap: 7,
    marginBottom: 4,
  },
  sectionTitle: {
    color: "#075a9c",
    fontSize: 10.5,
    fontWeight: 700,
  },
  sectionLine: {
    flexGrow: 1,
    height: 0.7,
    backgroundColor: "#3f8fcc",
    marginTop: 2,
  },
  paragraph: {
    marginBottom: 3,
  },
  rowBetween: {
    flexDirection: "row",
    justifyContent: "space-between",
    gap: 16,
  },
  roleLine: {
    flexGrow: 1,
    flexShrink: 1,
  },
  date: {
    color: "#111827",
    minWidth: 90,
    textAlign: "right",
  },
  item: {
    marginBottom: 6,
  },
  itemTitle: {
    fontWeight: 700,
  },
  itemMeta: {
    marginTop: 1,
  },
  bold: {
    fontWeight: 700,
  },
  bullet: {
    flexDirection: "row",
    gap: 3,
    marginTop: 1.5,
    paddingLeft: 7,
  },
  bulletMarker: {
    width: 5,
  },
  bulletText: {
    flex: 1,
  },
  skillLine: {
    marginBottom: 2.5,
  },
});

function getGithubUsername(data: PortfolioData) {
  return data.contact.githubText.replace(/^github\.com\//, "");
}

function formatWebsite(data: PortfolioData) {
  return data.contact.website.replace(/^https?:\/\//, "");
}

function Section({
  title,
  children,
}: {
  title: string;
  children: React.ReactNode;
}) {
  return (
    <View style={styles.section}>
      <View style={styles.sectionTitleRow}>
        <Text style={styles.sectionTitle}>{title}</Text>
        <View style={styles.sectionLine} />
      </View>
      {children}
    </View>
  );
}

function Bullet({ children }: { children: React.ReactNode }) {
  return (
    <View style={styles.bullet}>
      <Text style={styles.bulletMarker}>-</Text>
      <Text style={styles.bulletText}>{children}</Text>
    </View>
  );
}

export function CvPdfDocument({
  data,
  locale,
}: {
  data: PortfolioData;
  locale: PortfolioLocale;
}) {
  const labels = labelsByLocale[locale];

  return (
    <Document
      title="Nguyen Kim Thi - PHP Backend Developer CV"
      author="Nguyen Kim Thi"
      subject={data.hero.role}
      language={locale === "vi" ? "vi-VN" : "en-US"}
    >
      <Page size="A4" style={styles.page}>
        <View style={styles.header}>
          <Text style={styles.name}>
            {locale === "vi" ? "Nguyễn Kim Thi" : "Nguyen Kim Thi"}
          </Text>
          <Text style={styles.role}>{data.hero.role}</Text>
          <View style={styles.contactRow}>
            <Text>17/08/2003</Text>
            <Text>{labels.contactSeparator}</Text>
            <Text>{data.contact.phone}</Text>
            <Text>{labels.contactSeparator}</Text>
            <Text>{data.contact.email}</Text>
            <Text>{labels.contactSeparator}</Text>
            <Text>{formatWebsite(data)}</Text>
            <Text>{labels.contactSeparator}</Text>
            <Text>{getGithubUsername(data)}</Text>
          </View>
        </View>

        <Section title={labels.summary}>
          <Text style={styles.paragraph}>{data.hero.summary}</Text>
          {data.capabilities.blocks.map((block) => (
            <Text key={block.title} style={styles.paragraph}>
              {block.evidencePoints[0]}
            </Text>
          ))}
        </Section>

        <Section title={labels.skills}>
          {data.skills.categories.map((category) => (
            <Text key={category.id} style={styles.skillLine}>
              <Text style={styles.bold}>{category.title}: </Text>
              {category.items.join(", ")}
            </Text>
          ))}
        </Section>

        <Section title={labels.experience}>
          {data.experience.items.map((item) => (
            <View key={item.id} style={styles.item}>
              <View style={styles.rowBetween}>
                <Text style={styles.roleLine}>
                  <Text style={styles.bold}>{item.role}</Text>, {item.company}
                </Text>
                <Text style={styles.date}>{item.period}</Text>
              </View>
            </View>
          ))}
        </Section>

        <Section title={labels.projects}>
          {data.professionalProjects.items.map((project) => (
            <View key={project.id} style={styles.item}>
              <View style={styles.rowBetween}>
                <Text style={[styles.itemTitle, styles.roleLine]}>
                  {project.name}
                </Text>
                <Text style={styles.date}>{project.period}</Text>
              </View>
              <Text style={styles.itemMeta}>
                {project.company} | <Text style={styles.bold}>{project.role}</Text>
              </Text>
              <Bullet>{project.description}</Bullet>
              <Bullet>{project.stack.join(", ")}</Bullet>
              {project.highlights.map((highlight) => (
                <Bullet key={highlight}>{highlight}</Bullet>
              ))}
            </View>
          ))}
        </Section>

        <Section title={labels.education}>
          <View style={styles.rowBetween}>
            <Text style={styles.roleLine}>
              <Text style={styles.bold}>{data.education.university}</Text>,{" "}
              {data.education.degree}
            </Text>
            <Text style={styles.date}>{data.education.period}</Text>
          </View>
          <Bullet>{data.education.badge}</Bullet>
          {data.education.achievements.map((achievement) => (
            <Bullet key={achievement}>{achievement}</Bullet>
          ))}
        </Section>
      </Page>
    </Document>
  );
}
