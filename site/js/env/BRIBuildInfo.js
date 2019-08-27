'use strict';

class BRIBuildInfo {
  constructor() {
    this._dateBuild = '2019-08-27 16:00:05';
    this._versionBuild = 'jenkins-Bricolage-317';
    this._commitGIT = 'b222e098a4b007f5cb5dd6e97596625c65565ac5';
  }

  getBuildInfo () {
    return {
      "date": this._dateBuild,
      "version": this._versionBuild,
      "commit": this._commitGIT
    }
  }
}