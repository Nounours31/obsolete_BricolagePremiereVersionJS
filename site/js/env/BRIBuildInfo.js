'use strict';

class BRIBuildInfo {
  constructor() {
    this._dateBuild = '2020-11-16 20:00:07';
    this._versionBuild = 'jenkins-Bricolage-2106';
    this._commitGIT = '58cae2032d5878ef233d2763fa06ad804d652c9f';
  }

  getBuildInfo () {
    return {
      "date": this._dateBuild,
      "version": this._versionBuild,
      "commit": this._commitGIT
    }
  }
}