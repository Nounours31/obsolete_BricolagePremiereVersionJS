'use strict';

class BRIBuildInfo {
  constructor() {
    this._dateBuild = '2020-11-03 08:00:07';
    this._versionBuild = 'jenkins-Bricolage-2051';
    this._commitGIT = '2141583ba7231b785c2f4199ed7085d4205b2f77';
  }

  getBuildInfo () {
    return {
      "date": this._dateBuild,
      "version": this._versionBuild,
      "commit": this._commitGIT
    }
  }
}