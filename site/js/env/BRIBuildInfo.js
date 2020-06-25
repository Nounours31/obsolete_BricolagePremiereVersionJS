'use strict';

class BRIBuildInfo {
  constructor() {
    this._dateBuild = '2020-06-25 12:00:12';
    this._versionBuild = 'jenkins-Bricolage-1528';
    this._commitGIT = '96e7762dd506edf6de5563b864a62e6c5c032c94';
  }

  getBuildInfo () {
    return {
      "date": this._dateBuild,
      "version": this._versionBuild,
      "commit": this._commitGIT
    }
  }
}