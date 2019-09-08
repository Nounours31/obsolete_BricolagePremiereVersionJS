'use strict';

class BRIBuildInfo {
  constructor() {
    this._dateBuild = '2019-09-08 20:00:04';
    this._versionBuild = 'jenkins-Bricolage-366';
    this._commitGIT = '5024e6d34586670bf5ba70c7f57bc3c5aafced9a';
  }

  getBuildInfo () {
    return {
      "date": this._dateBuild,
      "version": this._versionBuild,
      "commit": this._commitGIT
    }
  }
}