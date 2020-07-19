'use strict';

class BRIBuildInfo {
  constructor() {
    this._dateBuild = '2020-07-19 08:00:07';
    this._versionBuild = 'jenkins-Bricolage-1623';
    this._commitGIT = 'b6953f8afdd4ad1fd1793dcbbfdc9c8ec0be0c60';
  }

  getBuildInfo () {
    return {
      "date": this._dateBuild,
      "version": this._versionBuild,
      "commit": this._commitGIT
    }
  }
}