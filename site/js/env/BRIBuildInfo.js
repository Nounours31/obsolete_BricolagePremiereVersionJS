'use strict';

class BRIBuildInfo {
  constructor() {
    this._dateBuild = '2020-02-01 12:00:05';
    this._versionBuild = 'jenkins-Bricolage-948';
    this._commitGIT = 'c36f0cc7f2fd06006cbfc1c6249e078bdf9e1f89';
  }

  getBuildInfo () {
    return {
      "date": this._dateBuild,
      "version": this._versionBuild,
      "commit": this._commitGIT
    }
  }
}