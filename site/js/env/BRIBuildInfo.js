'use strict';

class BRIBuildInfo {
  constructor() {
    this._dateBuild = '2019-08-07 16:00:16';
    this._versionBuild = 'jenkins-Bricolage-237';
    this._commitGIT = '1cab2dd9e11bdda952809c73eb510788e3314d56';
  }

  getBuildInfo () {
    return {
      "date": this._dateBuild,
      "version": this._versionBuild,
      "commit": this._commitGIT
    }
  }
}