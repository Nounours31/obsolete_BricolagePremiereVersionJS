'use strict';

class BRIBuildInfo {
  constructor() {
    this._dateBuild = '2020-11-13 08:00:07';
    this._versionBuild = 'jenkins-Bricolage-2091';
    this._commitGIT = '4b995a5534fa262567e66359c8a11ee2b6f57c39';
  }

  getBuildInfo () {
    return {
      "date": this._dateBuild,
      "version": this._versionBuild,
      "commit": this._commitGIT
    }
  }
}