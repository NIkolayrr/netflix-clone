# Performance Comparison Report

- **Current**: main (d0626896965e93d6f949e5665247c6162000a6fe) - 2025-06-01 12:34:59Z
- **Baseline**: main (d0626896965e93d6f949e5665247c6162000a6fe) - 2025-06-01 12:20:37Z

### Significant Changes To Duration

*There are no entries*

### Meaningless Changes To Duration

<details>
<summary>Show entries</summary>

| Name                                              | Type   | Duration                            | Count  |
| ------------------------------------------------- | ------ | ----------------------------------- | ------ |
| MovieCard renders efficiently with many instances | render | 14.3 ms → 14.3 ms (+0.1 ms, ±0.0%)  | 1 → 1  |
| MovieList renders efficiently with many movies    | render | 3.6 ms → 3.6 ms (+0.0 ms, +0.8%)    | 1 → 1  |

</details>

<details>
<summary>Show details</summary>

| Name                                              | Type   | Duration                                                                                                                                                                                                                                                                                                                                              | Count                                                                                                                                                                                               |
| ------------------------------------------------- | ------ | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| MovieCard renders efficiently with many instances | render | **Baseline**<br/>Mean: 14.3 ms<br/>Stdev: 0.3 ms (1.9%)<br/>Runs: 14.8 14.1 14.1 14.6 14.1 14.1 14.5 14.5 14.2 13.9<br/>Warmup runs: 52.8<br/>Removed outliers: (none)<br/><br/>**Current**<br/>Mean: 14.3 ms<br/>Stdev: 0.2 ms (1.5%)<br/>Runs: 14.2 14.5 14.8 14.2 14.2 14.2 14.1 14.3 14.3 14.5<br/>Warmup runs: 62.4<br/>Removed outliers: (none) | **Baseline**<br/>Mean: 1<br/>Stdev: 0 (0.0%)<br/>Runs: 1 1 1 1 1 1 1 1 1 1<br/>Render issues:<br/><br/>**Current**<br/>Mean: 1<br/>Stdev: 0 (0.0%)<br/>Runs: 1 1 1 1 1 1 1 1 1 1<br/>Render issues: |
| MovieList renders efficiently with many movies    | render | **Baseline**<br/>Mean: 3.6 ms<br/>Stdev: 0.1 ms (2.9%)<br/>Runs: 3.7 3.5 3.5 3.6 3.7 3.6 3.7 3.5 3.6 3.4<br/>Warmup runs: 37.2<br/>Removed outliers: (none)<br/><br/>**Current**<br/>Mean: 3.6 ms<br/>Stdev: 0.2 ms (4.8%)<br/>Runs: 4.1 3.6 3.5 3.6 3.6 3.6 3.6 3.5 3.5 3.5<br/>Warmup runs: 46.6<br/>Removed outliers: (none)                       | **Baseline**<br/>Mean: 1<br/>Stdev: 0 (0.0%)<br/>Runs: 1 1 1 1 1 1 1 1 1 1<br/>Render issues:<br/><br/>**Current**<br/>Mean: 1<br/>Stdev: 0 (0.0%)<br/>Runs: 1 1 1 1 1 1 1 1 1 1<br/>Render issues: |

</details>

### Render Count Changes

*There are no entries*

### Render Issues

*There are no entries*

### Added Entries

*There are no entries*

### Removed Entries

*There are no entries*