import assert from 'node:assert/strict';
import { analyze, analyzeRequest, contentItem } from '@x12i/nexus';

const request = analyzeRequest([contentItem('note-1', '# Example system\n\n## Review flow\n\nA reviewer reads the source evidence.')]);
const result = await analyze({ request });
assert(result.graphDraft.nodes.length > 0);
assert(result.draftId.length > 0);
assert.equal(result.itemResults.length, 1);
console.log({ draftId: result.draftId, nodes: result.graphDraft.nodes, claims: result.graphDraft.edgeClaims });
// This creates a draft only. It applies no plan and invokes no semantic provider.
