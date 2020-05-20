'use strict';

class BRIBuildInfo {
  constructor() {
    this._dateBuild = '2020-05-20 12:00:09';
    this._versionBuild = 'jenkins-Bricolage-1384';
    this._commitGIT = 'c630b8d76c4f3263b9232dbc255a0a2ed5d1301f';
  }

  getBuildInfo () {
    return {
      "date": this._dateBuild,
      "version": this._versionBuild,
      "commit": this._commitGIT
    }
  }
}