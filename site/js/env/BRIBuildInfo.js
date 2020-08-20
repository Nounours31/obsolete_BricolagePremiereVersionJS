'use strict';

class BRIBuildInfo {
  constructor() {
    this._dateBuild = '2020-08-20 16:00:11';
    this._versionBuild = 'jenkins-Bricolage-1753';
    this._commitGIT = '27174da74d2ed52bcceb2282b38af44c678817e0';
  }

  getBuildInfo () {
    return {
      "date": this._dateBuild,
      "version": this._versionBuild,
      "commit": this._commitGIT
    }
  }
}