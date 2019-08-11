'use strict';

class BRIBuildInfo {
  constructor() {
    this._dateBuild = '2019-08-11 16:00:12';
    this._versionBuild = 'jenkins-Bricolage-253';
    this._commitGIT = '846c1d6f9a43a6d631f87f72711afef09fc1318a';
  }

  getBuildInfo () {
    return {
      "date": this._dateBuild,
      "version": this._versionBuild,
      "commit": this._commitGIT
    }
  }
}