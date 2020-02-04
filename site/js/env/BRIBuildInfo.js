'use strict';

class BRIBuildInfo {
  constructor() {
    this._dateBuild = '2020-02-04 20:00:07';
    this._versionBuild = 'jenkins-Bricolage-962';
    this._commitGIT = '38fb57319f54a830b000d95a29d11759808deb6e';
  }

  getBuildInfo () {
    return {
      "date": this._dateBuild,
      "version": this._versionBuild,
      "commit": this._commitGIT
    }
  }
}