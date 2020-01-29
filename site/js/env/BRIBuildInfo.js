'use strict';

class BRIBuildInfo {
  constructor() {
    this._dateBuild = '2020-01-29 12:00:07';
    this._versionBuild = 'jenkins-Bricolage-936';
    this._commitGIT = 'a50b4f84eb12a83fab4091f31a487849010b0c2a';
  }

  getBuildInfo () {
    return {
      "date": this._dateBuild,
      "version": this._versionBuild,
      "commit": this._commitGIT
    }
  }
}