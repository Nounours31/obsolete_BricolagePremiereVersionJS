'use strict';

class BRIBuildInfo {
  constructor() {
    this._dateBuild = '2020-10-02 12:00:06';
    this._versionBuild = 'jenkins-Bricolage-1924';
    this._commitGIT = '189f036e40086fb623be797b635848624549ff94';
  }

  getBuildInfo () {
    return {
      "date": this._dateBuild,
      "version": this._versionBuild,
      "commit": this._commitGIT
    }
  }
}