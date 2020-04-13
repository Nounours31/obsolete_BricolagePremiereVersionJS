'use strict';

class BRIBuildInfo {
  constructor() {
    this._dateBuild = '2020-04-13 08:00:04';
    this._versionBuild = 'jenkins-Bricolage-1235';
    this._commitGIT = 'bcf07897c1853801dfac62eeba1754a3bd4d7acf';
  }

  getBuildInfo () {
    return {
      "date": this._dateBuild,
      "version": this._versionBuild,
      "commit": this._commitGIT
    }
  }
}