'use strict';

class BRIBuildInfo {
  constructor() {
    this._dateBuild = '2020-08-04 08:00:08';
    this._versionBuild = 'jenkins-Bricolage-1687';
    this._commitGIT = '95a965bd6560f550211f4525817666076fcbce19';
  }

  getBuildInfo () {
    return {
      "date": this._dateBuild,
      "version": this._versionBuild,
      "commit": this._commitGIT
    }
  }
}