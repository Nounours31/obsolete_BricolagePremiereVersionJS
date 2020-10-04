'use strict';

class BRIBuildInfo {
  constructor() {
    this._dateBuild = '2020-10-04 16:00:06';
    this._versionBuild = 'jenkins-Bricolage-1933';
    this._commitGIT = '8b662e3ece9d9c54c98e5a656e0455ceabc80b3e';
  }

  getBuildInfo () {
    return {
      "date": this._dateBuild,
      "version": this._versionBuild,
      "commit": this._commitGIT
    }
  }
}