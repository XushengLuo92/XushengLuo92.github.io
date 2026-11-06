# Gallery media

The gallery uses selected research demonstrations from `NCSU.key` and existing publication media.
Titles and topic assignments were checked against the presentation text and the publication page.

## Gallery clips

| Web filename | Source asset |
| --- | --- |
| `warehouse-coordination.mp4` | User-provided `warehouse.mp4` |
| `building-service-tasks.mp4` | `449463120-d65a0b99-b74e-4095-a2b8-0fad1b47919a-38738.mov` |
| `task-choice-handover.mp4` | `sequential(1)-39828.mp4` |
| `sequential-handover.mp4` | `chain_sequential-31579.mov` |
| `alternative-goals.mp4` | `OR-31588.mov` |
| `obstacle-aware-handover.mp4` | `obstacle-31589.mov` |
| `direct-placement.mp4` | `direct_place-53452.mp4` |
| `planned-handover.mp4` | `handover_place-53453.mp4` |
| `mobile-manipulation.mp4` | `dog-59320.mp4` |
| `convoy-coordination.mp4` | `convoy-59351.mp4` |
| `household-planning.mp4` | `web-video-aithor-1task-3-27534.mp4` |
| `push-blue.mp4` | User-provided `blue first.mp4` |
| `push-green.mp4` | User-provided `green first.mp4` |
| `peg-red.mp4` | User-provided `red end in.mp4` |
| `peg-white.mp4` | User-provided `white end in.mp4` |
| `lego-assembly.mp4` | `fast_lego-49620.mp4` |
| `keypoint-verification.mp4` | `TCPS25.gif` |
| `learning-lego.mp4` | `SaLfD.gif` |

`learning-lego` and `keypoint-verification` are conversions of existing GIFs in `videos/`; the Push-T, peg-insertion, and warehouse clips are user-provided videos; other rows are extracted from the Keynote.

New clips use H.264, yuv420p, and MP4 fast-start, with a maximum resolution of 1280 × 720, except `building-service-tasks.mp4`, which preserves 1440 × 1080 so its floor-plan labels and embedded instructions remain readable in fullscreen. The Keynote extracts and GIF conversions are silent visual demonstrations; descriptions accompany each player. Existing MP4s are reused without modification. The featured four-arm handover uses `videos/RSS2025.mp4` and `images/posters/RSS2025.jpg`, matching the publication page. Playback is user initiated, with no full-video preload.

Background examples from other organizations, presentation screen recordings, and redundant variants were not included. No source Keynote is needed to serve the gallery.

To add a demonstration, add a static article to `gallery.html`, an MP4 here, and a JPEG poster in `images/gallery/`. Keep topic counts and the overview total in sync.

## Task-description sources

Task blocks in `gallery.html` use the embedded instructions in the clips and extracted Keynote slide text.

- Hardware handover: green, orange, blue (Slide-10724412).
- Chain handover: yellow, blue, red (Slide-10724414).
- Obstacle handover: yellow, blue, return yellow; avoid red region (Slide-10724413).
- Alternative goals: yellow, then either blue or red (Slide-10724416).
- Target 1/2 and convoy tasks: formulas and target labels in the video frames.
- Plate placement and household tasks: instructions embedded in RAL25.mp4, household-planning.mp4, and TRO25.mp4. The Keynote identifies the single-robot household clip as RA-L 2025 (Slide-10755840).
- LEGO assembly: bottom-up layer precedence (Slide-11314482).
- TRO22: overview of the grid-world benchmark; exact counts and a specific formula are not assigned to the excerpt because it does not display its formula. Full specifications: https://arxiv.org/html/2101.05694v4#S7.SS3.

- Building service tasks: all five instructions transcribed from the embedded text in `449463120-d65a0b99-b74e-4095-a2b8-0fad1b47919a-38738.mov` (Task 4). The Keynote discusses concurrent building services in Slide-11672442.

- Task-choice handover: slide 75 in the non-skipped presentation sequence (Slide-14684750; entry 99 including skipped slides), referencing media asset 39828. Both task alternatives and the selected execution are described in that slide and the following slide (Slide-11797483).

The Push-T replacements preserve the original 1728 × 486 resolution and audio, with MP4 fast-start enabled. Their titles, captions, durations, and posters match the new blue-first and green-first steering demonstrations. The original upload files remain unchanged.

The peg-insertion clips preserve the original 1718 × 486 resolution and audio, with MP4 fast-start enabled. The red-end and white-end insertion captions match the visible preferences in each video; original upload files remain unchanged.

- Warehouse coordination: task description transcribed from the opening Task 1 slide in `warehouse.mp4`. The gallery copy preserves the original 1920 × 1080 resolution and audio, with MP4 fast-start enabled. Its poster shows the warehouse simulation; the original upload remains unchanged.
