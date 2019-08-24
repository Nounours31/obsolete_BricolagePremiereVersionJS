'use strict';

class BRIBuildInfo {
  constructor() {
    this._dateBuild = '2019-08-24 12:00:04';
    this._versionBuild = 'jenkins-Bricolage-304';
    this._commitGIT = '8949e1e7877c798e40d2298f077d442ebd87d466';
  }

  getBuildInfo () {
    return {
      "date": this._dateBuild,
      "version": this._versionBuild,
      "commit": this._commitGIT
    }
  }
}