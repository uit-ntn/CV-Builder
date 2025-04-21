import { Document, Packer, Paragraph, TextRun, HeadingLevel, Table, TableRow, TableCell, WidthType, AlignmentType, BorderStyle } from 'docx';
import { saveAs } from 'file-saver';

export default async function exportToWord(cvData, templateId) {
  const { personal, experience, education, skills } = cvData;
  
  // Create Document
  const doc = new Document({
    sections: [
      {
        properties: {},
        children: [
          // Header - Name and Title
          new Paragraph({
            text: personal.name,
            heading: HeadingLevel.HEADING_1,
            alignment: AlignmentType.CENTER,
          }),
          new Paragraph({
            text: personal.title,
            heading: HeadingLevel.HEADING_2,
            alignment: AlignmentType.CENTER,
          }),
          
          // Contact Information
          new Paragraph({
            alignment: AlignmentType.CENTER,
            children: [
              new TextRun({ text: personal.email, break: 1 }),
              new TextRun({ text: personal.phone, break: 1 }),
              new TextRun({ text: personal.address, break: 1 }),
            ],
          }),
          
          // About Section
          new Paragraph({
            text: "GIỚI THIỆU",
            heading: HeadingLevel.HEADING_2,
            thematicBreak: true,
            spacing: { after: 200 },
          }),
          new Paragraph({
            text: personal.about,
            spacing: { after: 400 },
          }),
          
          // Experience Section
          new Paragraph({
            text: "KINH NGHIỆM LÀM VIỆC",
            heading: HeadingLevel.HEADING_2,
            thematicBreak: true,
            spacing: { after: 200 },
          }),
          ...experience.flatMap(job => [
            new Paragraph({
              children: [
                new TextRun({ text: job.title, bold: true }),
                new TextRun({ text: ` at ${job.company}, ${job.location}` }),
                new TextRun({ text: ` (${job.from} - ${job.to})`, italics: true }),
              ],
              spacing: { after: 100 },
            }),
            new Paragraph({
              text: job.description,
              spacing: { after: 300 },
            }),
          ]),
          
          // Education Section
          new Paragraph({
            text: "HỌC VẤN",
            heading: HeadingLevel.HEADING_2,
            thematicBreak: true,
            spacing: { after: 200 },
          }),
          ...education.flatMap(edu => [
            new Paragraph({
              children: [
                new TextRun({ text: edu.degree, bold: true }),
                new TextRun({ text: ` at ${edu.school}, ${edu.location}` }),
                new TextRun({ text: ` (${edu.from} - ${edu.to})`, italics: true }),
              ],
              spacing: { after: 100 },
            }),
            new Paragraph({
              text: edu.description,
              spacing: { after: 300 },
            }),
          ]),
          
          // Skills Section
          new Paragraph({
            text: "KỸ NĂNG",
            heading: HeadingLevel.HEADING_2,
            thematicBreak: true,
            spacing: { after: 200 },
          }),
          new Table({
            width: {
              size: 100,
              type: WidthType.PERCENTAGE,
            },
            rows: skills.map(skill => 
              new TableRow({
                children: [
                  new TableCell({
                    children: [new Paragraph(skill.name)],
                    width: {
                      size: 50,
                      type: WidthType.PERCENTAGE,
                    },
                  }),
                  new TableCell({
                    children: [new Paragraph(`${skill.level}%`)],
                    width: {
                      size: 50,
                      type: WidthType.PERCENTAGE,
                    },
                  }),
                ],
              })
            ),
          }),
        ],
      },
    ],
  });

  // Generate document
  try {
    const buffer = await Packer.toBuffer(doc);
    const filename = `${personal.name.replace(/\s+/g, '-').toLowerCase()}-cv.docx`;
    saveAs(new Blob([buffer]), filename);
  } catch (error) {
    console.error('Error generating Word document:', error);
    alert('Có lỗi khi tạo file Word. Vui lòng thử lại sau.');
  }
}
