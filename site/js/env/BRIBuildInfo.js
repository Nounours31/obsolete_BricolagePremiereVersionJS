'use strict';

class BRIBuildInfo {
  constructor() {
    this._dateBuild = '2020-01-28 12:00:07';
    this._versionBuild = 'jenkins-Bricolage-932';
    this._commitGIT = '39d427e262bc1d41feda576145dc50309d8d05e9';
  }

  getBuildInfo () {
    return {
      "date": this._dateBuild,
      "version": this._versionBuild,
      "commit": this._commitGIT
    }
  }
}